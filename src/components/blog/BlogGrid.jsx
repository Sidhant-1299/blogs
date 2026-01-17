import BlogCard from "./BlogCard";

export default function BlogGrid({ posts = [] }) {
  return (
    <div className="grid w-full grid-cols-1 gap-x-7 gap-y-12 lg:gap-y-10 pt-2 md:grid-cols-2 lg:pt-6">
      {posts.map((p) => (
        <BlogCard key={p.slug} post={p} />
      ))}
    </div>
  );
}
