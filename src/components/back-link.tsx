import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/** The back control. `dark` is for the treatments that sit over a plate. */
export function BackLink({
  label,
  onClick,
  dark,
}: {
  label: ReactNode;
  onClick: () => void;
  dark?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        dark
          ? "glass-dark font-label self-start px-3 py-2 transition-colors hover:text-clay"
          : "font-label text-muted-foreground transition-colors hover:text-clay"
      }
    >
      ← {label}
    </button>
  );
}

/**
 * The not-found body shared by every nested route. Each route previously
 * carried its own near-identical copy.
 */
export function RouteNotFound({ backTo, backLabel }: { backTo: string; backLabel: string }) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pt-40 pb-24 md:px-10">
      <h1 className="font-display text-4xl">Not found.</h1>
      <Link to={backTo} className="mt-6 inline-block underline">
        {backLabel}
      </Link>
    </div>
  );
}
