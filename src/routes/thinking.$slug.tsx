import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/thinking/$slug")({
  component: () => <Outlet />,
});
