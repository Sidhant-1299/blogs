import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { posts } from "../data/posts";
import BlogGrid from "../components/blog/BlogGrid";

export default function Home() {
  const [params] = useSearchParams();
  const q = (params.get("q") ?? "").trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!q) return posts;
    return posts.filter((p) => {
      const hay = `${p.title} ${p.excerpt} ${(p.tags || []).join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }, [q]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Home</h1>
        <p className="mt-2 text-muted max-w-2xl">
          A Notion-dark inspired reading space. Minimal noise. Strong words. Clean cards.
        </p>
      </div>

      <BlogGrid posts={filtered} />
    </div>
  );
}
