import { loadRecipe, getStaticPaths } from "../loadRecipes";
import TextContainer from "../../components/TextContainer";

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
      <div className="flex justify-center dark:bg-stone-950 bg-stone-100">
        <TextContainer className="mt-12 max-sm:mt-5 min-h-full">
          <h1 className="mb-0">{frontMatter.title}</h1>
          <span className="text-sm text-stone-500 dark:text-stone-400 mb-8 mt-0">{frontMatter.date}</span>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </TextContainer>
      </div>
    </div>
  );
}
