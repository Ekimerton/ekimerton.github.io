import { loadPost, getStaticPaths } from "../loadPosts";
import TextContainer from "../../components/TextContainer";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { paths } = await getStaticPaths();

  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
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
  const { slug } = await params;
  const { frontMatter, content } = await loadPost(slug);

  return (
    <div className="">
      <div className="flex justify-center dark:bg-stone-950 bg-stone-100">
        <TextContainer className="mt-8 max-sm:mt-0 min-h-screen">
          <h1 className="mb-0">{frontMatter.title}</h1>
          <span className="mt-0 text-sm text-stone-500 dark:text-stone-400 mb-8">{frontMatter.date}</span>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </TextContainer>
      </div>
    </div>
  );
}
