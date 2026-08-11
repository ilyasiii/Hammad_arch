import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/thinking/$slug")({
  component: () => <Outlet />,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-[1200px] px-6 pt-40 md:px-10">
        <h1 className="font-display text-4xl">Not found.</h1>
        <Link to="/thinking" className="mt-6 inline-block underline">Back to Thinking</Link>
      </div>
      <SiteFooter />
    </div>
  ),
});
