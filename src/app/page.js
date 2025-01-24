import Hero from "./sections/Hero";

import {
  AboutSection,
  ExperienceSection,
  EducationSection,
  ProjectsSection,
  BlogSection,
  ProjectsSimpleSection,
} from "./sections";

export default function Home() {
  return (
    <>
      <main className="h-full w-full flex items-center justify-center">
        {/*<Hero />*/}
        <article className="prose prose-stone dark:prose-invert max-w-2xl w-full px-4 py-4 prose-h2:font-semibold prose-h1:font-bold prose-h1:text-base prose-h2:text-base prose-h3:text-base  flex flex-col gap-12 mt-24 items-around prose-p:text-stone-500 prose-p:dark:text-stone-400">
          <AboutSection />
          {/*<ExperienceSection />*/}
          {/*<ProjectsSection />*/}
          {/*<EducationSection />*/}
          <ProjectsSimpleSection />
        </article>
      </main>
    </>
  );
}
