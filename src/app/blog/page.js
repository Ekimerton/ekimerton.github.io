import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { loadAllPosts } from "./loadPosts";
import TextContainer from "../components/TextContainer";

export default async function BlogHome() {
  const posts = await loadAllPosts();

  return (
    <main className="h-full w-full dark:bg-stone-950 bg-stone-100 flex justify-center">
      <TextContainer className="mt-8">
        <h1>My Blog</h1>
        <div>
          {posts.map(({ slug, frontMatter }) => (
            <div key={slug}>
              <p>
                <Link href={`/blog/${slug}`} className="no-underline font-normal text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200">
                  <span className="mr-4">{frontMatter.date}</span>
                  <span className="font-semibold text-stone-900 dark:text-stone-100">{frontMatter.title}</span>
                </Link>
              </p>
            </div>
          ))}
        </div>
      </TextContainer>
    </main>
  );
}
