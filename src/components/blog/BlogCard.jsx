import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <Link
      to={`/post/${post.slug}`}
      className={[
        "group block overflow-hidden rounded-2xl",
        "border border-border bg-surface",
        "hover:bg-surface2 hover:border-border/70",
        "transition",
      ].join(" ")}
    >
      <div className="aspect-[16/9] overflow-hidden bg-black/20">
        <img
          src={post.cover}
          alt=""
          className="h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <div className="text-xs text-muted">
          {new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" })}
        </div>

        <div className="mt-1 text-lg font-semibold leading-snug">
          {post.title}
        </div>

        <p className="mt-2 text-sm text-muted leading-relaxed">
          {post.excerpt}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags?.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-xs rounded-full border border-border px-2 py-1 text-muted"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
