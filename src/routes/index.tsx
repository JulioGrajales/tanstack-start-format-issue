import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <a href="/og-image.jpg" style={{ fontSize: "1.3rem" }}>
        Img url
      </a>
      <div>
        <img src="/og-image.jpg" />
      </div>
    </>
  );
}
