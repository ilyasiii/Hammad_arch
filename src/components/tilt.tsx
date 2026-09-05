import { useRef, useState, type ReactNode } from "react";

const MAX_DEGREES = 5;

/**
 * Tips a card in 3D toward the pointer.
 *
 * Pointer-driven rather than scroll-driven, and capped at five degrees, past
 * that a photograph starts to look like a playing card. Pointer-type is
 * checked so touch devices, where there is no hover, get nothing.
 */
export function Tilt({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const apply = (rx: number, ry: number, lift: string) => {
    const inner = ref.current?.firstElementChild as HTMLElement | undefined;
    if (inner) {
      inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${lift})`;
    }
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // −0.5 … 0.5 from the centre of the card.
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    apply(-y * MAX_DEGREES * 2, x * MAX_DEGREES * 2, "12px");
  };

  return (
    <div
      ref={ref}
      className={`tilt ${className ?? ""}`}
      data-active={active}
      onPointerMove={onPointerMove}
      onPointerEnter={(e) => e.pointerType === "mouse" && setActive(true)}
      onPointerLeave={() => {
        setActive(false);
        apply(0, 0, "0px");
      }}
    >
      {children}
    </div>
  );
}
