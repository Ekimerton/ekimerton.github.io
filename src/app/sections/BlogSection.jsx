import Link from "next/link";
import { loadAllPosts } from "../blog/loadPosts";

export default async function BlogSection({}) {
  const posts = await loadAllPosts();
  return (
    <div>
      <h3>Blog Posts</h3>
      {posts.slice(0, 3).map(({ slug, frontMatter, preview }) => (
        <>
          <Link key={slug} href={`/blog/${slug}`}>
            <h4 className="">{frontMatter.title}</h4>
          </Link>
          <p className="mt-3">{preview}...</p>
        </>
      ))}
      <Link href="/blog" className="text-center">
        <p className="text-sm">See More</p>
      </Link>
    </div>
  );
}
