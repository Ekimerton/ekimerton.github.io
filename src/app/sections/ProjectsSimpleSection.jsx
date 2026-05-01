import Link from "next/link";

export default async function ProjectsSimpleSection({ }) {
  return (
    <div>
      <h1 className="mt-8">My Projects</h1>
      <div>
        <p>
          <Link href={`https://hexcodle.com`} className="no-underline font-normal text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200">
            <span className="mr-4 font-semibold text-stone-900 dark:text-stone-100">Hexcodle</span> Daily wordle-like hexcode guessing game. <i>~100k players last year</i>
          </Link>
        </p>
      </div>
    </div>
  );
}
