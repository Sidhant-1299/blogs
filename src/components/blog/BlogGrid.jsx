import BlogCard from "./BlogCard";

export default function BlogGrid({ posts = [] }) {
  return (
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
      {posts.map((p) => (
        <BlogCard key={p.slug} post={p} />
      ))}
    </div>
  );
}
