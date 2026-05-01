import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { loadAllPosts } from "./loadPosts";

export default async function BlogHome() {
  const posts = await loadAllPosts();

  return (
    <main className="h-full w-full dark:bg-stone-950 bg-stone-100 flex justify-center">
      <article className="prose prose-stone dark:prose-invert max-w-3xl w-full px-4 py-4 mt-24 max-sm:mt-0 max-sm:pt-0 prose-h1:text-base prose-h2:text-base prose-h3:text-base prose-p:text-stone-500 prose-p:dark:text-stone-400">
        <div>
          <div className="h-20">

          </div>
          {posts.map(({ slug, frontMatter, preview }) => (
            <div key={slug}>
              <Link href={`/blog/${slug}`} className="no-underline">
                <h3 className="">{frontMatter.title}</h3>
                <p className="mt-0 font-normal">{preview}...</p>
              </Link>
            </div>
          ))}
          <p className="text-light text-center text-sm">More coming soon!</p>
        </div>
      </article>
    </main>
  );
}
