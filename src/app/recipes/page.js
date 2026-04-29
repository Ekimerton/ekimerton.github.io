import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { loadAllRecipes } from "./loadRecipes";

export default async function RecipesHome() {
  const recipes = await loadAllRecipes();

  return (
    <main className="h-full w-full dark:bg-stone-950 bg-stone-100 flex justify-center">
      <article className="prose prose-stone dark:prose-invert max-w-3xl w-full px-4 py-4 mt-24 prose-h1:text-base prose-h2:text-base prose-h3:text-base prose-p:text-stone-500 prose-p:dark:text-stone-400">
        <div>
          <h3>Recipes</h3>
          {recipes.map(({ slug, frontMatter, preview }) => (
            <div key={slug}>
              <Link href={`/recipes/${slug}`}>
                <h3 className="">{frontMatter.title}</h3>
              </Link>
              <p className="">{preview}...</p>
            </div>
          ))}
          <p className="text-light text-center text-sm">More coming soon!</p>
        </div>
      </article>
    </main>
  );
}
