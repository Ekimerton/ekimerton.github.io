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
        <TextContainer className="mt-8 min-h-screen">
          <h1>{frontMatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </TextContainer>
      </div>
    </div>
  );
}
