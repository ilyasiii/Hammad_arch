import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout route for /projects. The actual listing page lives in
// projects.index.tsx; this file just renders matched child routes
// (projects/$category/$slug, projects/commercial, etc.) via <Outlet />.
export const Route = createFileRoute("/projects")({
  component: ProjectsLayout,
});

function ProjectsLayout() {
  return <Outlet />;
}
