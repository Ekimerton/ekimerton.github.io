import Hero from "./sections/Hero";

import {
  AboutSection,
  ExperienceSection,
  EducationSection,
  ProjectsSection,
  BlogSection,
} from "./sections";

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full">
        <Hero />
        <div className="flex items-center justify-center dark:bg-zinc-950 bg-zinc-100">
          <article className="prose prose-zinc dark:prose-invert max-w-4xl w-full px-5 py-8 prose-h2:font-semibold prose-h1:font-bold">
            <AboutSection />
            {/* <ExperienceSection /> */}
            <ProjectsSection />
            {/*<EducationSection />*/}
            <BlogSection />
          </article>
        </div>
      </main>
    </>
  );
}
