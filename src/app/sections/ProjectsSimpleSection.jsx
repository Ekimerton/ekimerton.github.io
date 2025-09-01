import Link from "next/link";

export default async function ProjectsSimpleSection({ }) {
  return (
    <div>
      <h3>Projects</h3>

      <Link href={`https://hexcodle.com`} className="no-underline">
        <div className="hover:bg-stone-200 hover:text-stone-900 dark:hover:bg-stone-800 dark:hover:text-stone-50 rounded-md px-3 py-2 -mx-3">
          <h4 className="mt-0 font-normal">Hexcodle</h4>
          <p className="mb-0 mt-2 font-normal text-stone-500 dark:text-stone-400">
            Daily wordle-like hexcode guessing game. <i>~5000 users daily</i>
          </p>
        </div>
      </Link>

    </div>
  );
}
