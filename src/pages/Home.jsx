import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { posts } from "../data/posts";
import BlogGrid from "../components/blog/BlogGrid";

const norm = (s = "") => s.toLowerCase().normalize("NFKD").trim();

export default function Home() {
  const [searchParams] = useSearchParams();
  const q = norm(searchParams.get("q") ?? "");

  const filtered = useMemo(() => {
    if (!q) return posts;
    return posts.filter((p) => {
      const hay = norm(`${p.title} ${p.excerpt} ${(p.tags || []).join(" ")}`);
      return hay.includes(q);
    });
  }, [q]);

  const year = new Date().getFullYear();

  return (
    <div className="space-y-10">
      {/* HERO full-bleed */}
      <section className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]">
        <div className="relative h-[62vh] min-h-[420px] max-h-[820px] overflow-hidden rounded-none">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-110 contrast-105 saturate-110"
            style={{ backgroundImage: "url(/samurai_bg.webp)" }}
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45" />
        </div>
      </section>

      {/* GRID uses layout container width */}
      <section className="w-full">
        <BlogGrid posts={filtered} />
      </section>

      {/* FOOTER uses layout container width */}
      <footer className="border-t border-border">
        <div className="py-6">
          <p className="text-sm text-muted text-center">
            © {year} Sidhant Raj Khati. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
