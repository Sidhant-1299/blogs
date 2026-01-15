import BlogCard from "./BlogCard";

export default function BlogGrid({ posts = [] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <BlogCard key={p.slug} post={p} />
      ))}
    </div>
  );
}
