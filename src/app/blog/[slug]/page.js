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
      <div className="flex justify-center dark:bg-stone-950 bg-stone-100">
        <article className="prose prose-stone dark:prose-invert dark:prose-p:text-stone-400 prose-p:text-stone-700 dark:prose-blockquote:text-stone-300 prose-blockquote:text-stone-700 max-w-4xl w-full px-4 py-4 min-h-screen prose-code:py-1 prose-code:px-2 prose-code:bg-stone-800 dark:prose-code:bg-stone-600 prose-code:text-stone-200 dark:prose-code:text-stone-300 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-code:mx-0.5 prose-pre:bg-stone-800 dark:prose-pre:bg-stone-600 prose-code:break-words prose-h2:font-normal prose-h1:font-normal prose-p:font-normal prose-h3:font-normal">
          <Link
            href="/blog"
            className="text-sm no-underline text-stone-700 dark:text-stone-400 flex items-center mb-10 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to posts
          </Link>
          <p className="text-sm">{frontMatter.date}</p>
          <h1 className="">{frontMatter.title}</h1>
          <div id="author-info" className="flex gap-4 mb-12 items-center">
            <Image
              id="headshot"
              className="h-14 w-14 rounded-md border-stone-700/10 border-2 m-0"
              src={frontMatter.author.imageUrl}
              width={50}
              height={50}
              alt="Headshot"
            />
            <div>
              <p className="m-0 text-sm text-stone-950 dark:text-stone-50">
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
