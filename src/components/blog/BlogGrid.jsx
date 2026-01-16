import BlogCard from "./BlogCard";

export default function BlogGrid({ posts = [] }) {
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 mx-6 md:mx-2 lg:pt-6 pt-2">
      {posts.map((p, idx) => (
        <BlogCard
          key={p.slug}
          post={p}
        />
      ))}
    </div>
  );
}
