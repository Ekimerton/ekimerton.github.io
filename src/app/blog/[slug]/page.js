import { loadPost } from "../loadPosts";
import Image from "next/image";
import { getStaticPaths } from "../loadPosts";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const { paths } = await getStaticPaths();

  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const { frontMatter } = await loadPost(slug);

  const keywordsArray = frontMatter.keywords
    .split(",")
    .map((keyword) => keyword.trim());

  return {
    title: frontMatter.title,
    description: frontMatter.description,
    keywords: keywordsArray,
  };
}

export default async function Post({ params }) {
  const { slug } = params;
  const { frontMatter, content } = await loadPost(slug);

  return (
    <div className="">
      {/*<Hero />*/}
      <div className="flex justify-center dark:bg-zinc-950 bg-zinc-100">
        <article className="prose prose-zinc dark:prose-invert dark:prose-p:text-zinc-400 prose-p:text-zinc-700 dark:prose-blockquote:text-zinc-300 prose-blockquote:text-zinc-700 max-w-4xl w-full px-5 py-4 pt-12 min-h-screen prose-code:py-1 prose-code:px-2 prose-code:bg-zinc-800 dark:prose-code:bg-zinc-600 prose-code:text-zinc-200 dark:prose-code:text-zinc-300 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-code:mx-0.5 prose-pre:bg-zinc-800 dark:prose-pre:bg-zinc-600 prose-code:break-words prose-h2:font-semibold prose-h1:font-bold">
          <Link
            href="/blog"
            className="text-sm no-underline text-zinc-700 dark:text-zinc-400 flex items-center mb-10 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to posts
          </Link>
          <p className="text-sm">{frontMatter.date}</p>
          <h1 className="">{frontMatter.title}</h1>
          <div id="author-info" className="flex gap-4 mb-12 items-center">
            <Image
              id="headshot"
              className="h-14 w-14 rounded-md border-zinc-700/10 border-2 m-0"
              src={frontMatter.author.imageUrl}
              width={50}
              height={50}
              alt="Headshot"
            />
            <div>
              <p className="m-0 text-sm text-zinc-950 dark:text-zinc-50">
                {frontMatter.author.name}
              </p>
              <a
                className="m-0 text-sm"
                href={frontMatter.author.url}
                target="_blank"
              >
                {frontMatter.author.handle}
              </a>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </div>
    </div>
  );
}
