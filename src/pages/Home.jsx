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
    <div className="space-y-10">
      {/* HERO */}
      {/* HERO (full-bleed inside the main content area) */}
<div className="-mx-6 2xl:-mx-24 3xl:-mx-36">
  <div className="relative h-[62vh] min-h-[420px] max-h-[820px] overflow-hidden rounded-none xl:rounded-sm 2xl:rounded-2xl">
    <div
      className="absolute inset-0 bg-cover bg-center brightness-110 contrast-105 saturate-110"
      style={{ backgroundImage: "url(/samurai_bg.webp)" }}
    />
    {/* lighter overlay */}
    <div className="absolute inset-0 bg-black/35" />
    {/* softer vignette */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45" />
  </div>
</div>

      {/* GRID */}
      <div>
        <BlogGrid posts={filtered} />
      </div>
    </div>
  );
}
