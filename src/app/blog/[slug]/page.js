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
      <div className="flex justify-center dark:bg-slate-950 bg-slate-100">
        <article className="prose prose-slate dark:prose-invert max-w-3xl w-full px-5 py-4 pt-12 min-h-screen prose-code:py-1 prose-code:px-2 prose-h2:font-semibold prose-h1:font-bold">
          <Link
            href="/blog"
            className="text-sm no-underline text-slate-700 dark:text-slate-400 flex items-center mb-10 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to posts
          </Link>
          <p className="text-sm">{frontMatter.date}</p>
          <h1 className="">{frontMatter.title}</h1>
          <div id="author-info" className="flex gap-4 mb-12 items-center">
            <Image
              id="headshot"
              className="h-14 w-14 rounded-md border-slate-700/10 border-2 m-0"
              src={frontMatter.author.imageUrl}
              width={50}
              height={50}
              alt="Headshot"
            />
            <div>
              <p className="m-0 text-sm text-slate-950 dark:text-slate-50">
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
