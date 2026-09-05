import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

const STAGGER_MS = 60;
const MAX_STAGGER_STEPS = 6;

/**
 * True once the element has entered the viewport, and never false again.
 *
 * Falls open in every failure case, no IntersectionObserver, or an observer
 * that never fires, because the alternative is content stuck at opacity 0.
 */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    observer.observe(node);

    const fallback = window.setTimeout(() => setShown(true), 2000);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return { ref, shown };
}

const delayStyle = (index: number) =>
  ({
    "--reveal-delay": `${Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS}ms`,
  }) as React.CSSProperties;

/**
 * `as` is always a plain HTML tag here, but TypeScript collapses the props of a
 * bare ElementType union to `never`. Narrowing to a concrete host component
 * type restores ref/className/style without loosening anything at the call site.
 */
type HostProps = React.HTMLAttributes<HTMLElement> & {
  ref?: React.Ref<HTMLElement>;
  "data-shown"?: boolean;
};
const host = (tag: ElementType) => tag as unknown as React.FC<HostProps>;

type RevealProps = {
  children: ReactNode;
  /** Stagger position within a group. Capped so late items never lag. */
  index?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Fades a block up as it enters the viewport, once.
 *
 * The hidden state is CSS-scoped to `.js` (see styles.css), so a failed
 * observer or a dead bundle leaves content visible rather than blank.
 */
export function Reveal({ children, index = 0, as = "div", className }: RevealProps) {
  const { ref, shown } = useInView<HTMLElement>();
  const Tag = host(as);

  return (
    <Tag
      ref={ref}
      data-shown={shown}
      className={`reveal ${className ?? ""}`}
      style={delayStyle(index)}
    >
      {children}
    </Tag>
  );
}

/**
 * Editorial heading reveal: the line rises out of its own baseline behind a
 * mask, rather than fading in place. Reads as typesetting rather than as a
 * web animation, which is why headings get this and blocks get <Reveal>.
 */
export function RevealText({ children, index = 0, as = "h2", className }: RevealProps) {
  const { ref, shown } = useInView<HTMLElement>();
  const Tag = host(as);

  return (
    <Tag ref={ref} data-shown={shown} className={`reveal-mask ${className ?? ""}`}>
      <span style={delayStyle(index)}>{children}</span>
    </Tag>
  );
}
