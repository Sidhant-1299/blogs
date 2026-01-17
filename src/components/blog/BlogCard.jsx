import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <Link
      to={`/post/${post.slug}`}
      className={[
          "group block overflow-hidden rounded-2xl",
          "bg-surface ring-1 ring-black/10 dark:ring-white/10",
          "shadow-[0_10px_30px_-26px_rgba(0,0,0,0.9)]",
          "transition duration-300",
          "hover:bg-surface2 hover:ring-black/15 dark:hover:ring-white/20",
        ].join(" ")}

    >
      <div className="flex flex-col sm:flex-row sm:h-[360px] lg:h-[420px] 2xl:h-[460px]">
        {/* IMAGE */}
        <div className="relative overflow-hidden bg-black/20 sm:basis-3/5 sm:h-full">
          <img
            src={post.cover}
            alt=""
            className="h-72 sm:h-full w-full object-cover opacity-95 transition-transform duration-300 group-hover:scale-[1.05]"
            loading="lazy"
          />

          {/* soft blend to match dark theme */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/35 opacity-70" />
        </div>

        {/* TEXT */}
        <div className="flex flex-1 flex-col p-5 lg:p-6">
          <div className="text-xs text-muted">
            {new Date(post.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })}
          </div>

          <div className="mt-1 text-xl font-semibold leading-snug lg:text-2xl">
            {post.title}
          </div>

          <p className="mt-3 text-sm text-muted leading-relaxed lg:text-[15px] line-clamp-5">
            {post.excerpt}
          </p>
          
          {/* Tags */}
          <div className="mt-auto pt-5 flex flex-wrap gap-2">
            {post.tags?.slice(0, 3).map((t) => (
              <span
                  key={t}
                  className={[
                    "text-xs rounded-full px-2 py-1 ring-1",
                    // light (visible)
                    "bg-black/5 text-neutral-700 ring-black/15 text-muted",
                    // dark (your old vibe)
                    "dark:bg-transparent dark:text-white/75 dark:ring-white/10",
                  ].join(" ")}
                >
                  #{t}
              </span>


            ))}
          </div>


        </div>
      </div>
    </Link>
  );
}
