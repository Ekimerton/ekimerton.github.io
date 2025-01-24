import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { loadAllPosts } from "./loadPosts";

export default async function BlogHome() {
  const posts = await loadAllPosts();

  return (
    <main className="min-h-screen w-full dark:bg-neutral-950 bg-neutral-100 flex justify-center">
      <article className="prose prose-neutral dark:prose-invert max-w-3xl w-full px-4 py-4 mt-24 prose-h1:text-base prose-h2:text-base prose-h3:text-base">
        <div>
          <h3>Blog Posts</h3>
          {posts.map(({ slug, frontMatter, preview }) => (
            <div key={slug}>
              <Link href={`/blog/${slug}`}>
                <h3 className="">{frontMatter.title}</h3>
              </Link>
              <p className="">{preview}...</p>
            </div>
          ))}
          <p className="text-light text-center text-sm">More coming soon!</p>
        </div>
      </article>
    </main>
  );
}
