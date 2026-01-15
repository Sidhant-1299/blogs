import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Post() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold">Not found</h1>
        <Link className="text-accent" to="/">Back home</Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl">
      <Link className="text-sm text-muted hover:text-text" to="/">
        ← Back
      </Link>

      <h1 className="mt-4 text-4xl font-bold tracking-tight">{post.title}</h1>
      <div className="mt-2 text-sm text-muted">{post.date}</div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
        <img src={post.cover} alt="" className="w-full object-cover" />
      </div>

      <div className="prose prose-invert mt-8 max-w-none">
        <p>
          For now this is placeholder content. Later you render Markdown or MDX here.
        </p>
      </div>
    </article>
  );
}
