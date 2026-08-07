import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

// The Nexora AI project is a standalone HTML/CSS/JS + Bootstrap 5 app served
// from /nexora/. The root route simply forwards visitors to its landing page.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexora AI | GenAI Gamified Self-Learning Platform" },
      {
        name: "description",
        content:
          "Nexora AI helps students learn real skills with personalized paths, quizzes, an AI study buddy, XP points and rewards.",
      },
      { property: "og:title", content: "Nexora AI | Gamified Self-Learning Platform" },
      {
        property: "og:description",
        content:
          "Personalized learning paths, quizzes, progress tracking, AI study buddy and reward points for students.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/nexora/index.html");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-sm text-muted-foreground">
        Loading Nexora AI…{" "}
        <a className="underline" href="/nexora/index.html">
          Open manually
        </a>
      </p>
    </div>
  );
}
