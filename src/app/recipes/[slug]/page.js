import { loadRecipe, getStaticPaths } from "../loadRecipes";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const { paths } = await getStaticPaths();

  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { frontMatter } = await loadRecipe(slug);

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
  const { slug } = await params;
  const { frontMatter, content } = await loadRecipe(slug);

  return (
    <div className="">
      {/*<Hero />*/}
      <div className="flex justify-center dark:bg-stone-950 bg-stone-100">
        <article className="prose prose-stone dark:prose-invert max-w-3xl w-full px-4 py-4 pt-12 min-h-screen prose-code:py-1 prose-code:px-2 prose-h2:font-semibold prose-h1:font-bold">
          <Link
            href="/recipes"
            className="text-sm no-underline text-stone-700 dark:text-stone-400 flex items-center mb-10 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to recipes
          </Link>
          <p className="text-sm">{frontMatter.date}</p>
          <h1 className="">{frontMatter.title}</h1>

          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </div>
    </div>
  );
}
