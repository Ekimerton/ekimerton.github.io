import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { loadAllPosts } from "./loadPosts";

export default async function BlogHome() {
  const posts = await loadAllPosts();

  return (
    <main className="min-h-screen w-full dark:bg-zinc-950 bg-zinc-100 flex justify-center">
      <div className="prose prose-zinc dark:prose-invert max-w-4xl w-full px-5 py-4 pt-12 prose-h2:font-semibold prose-h1:font-bold">
        <Link
          href="/"
          className="text-sm no-underline text-zinc-700 dark:text-zinc-400 flex items-center mb-10 font-semibold"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back home
        </Link>
        <h2>Blog Posts</h2>
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
    </main>
  );
}
