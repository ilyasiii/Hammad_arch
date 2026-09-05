import { useRouter } from "@tanstack/react-router";

/**
 * Returns to the previous page, falling back to a fixed route when there is no
 * history to return to, which is the case whenever someone lands on a project
 * or collection page directly from a search result or a shared link.
 */
export function useGoBack(fallback: () => void) {
  const router = useRouter();
  return () => {
    if (typeof window !== "undefined" && window.history.length > 1) router.history.back();
    else fallback();
  };
}
