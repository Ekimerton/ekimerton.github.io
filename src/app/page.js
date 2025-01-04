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
        <div className="flex items-center justify-center dark:bg-neutral-950 bg-neutral-100">
          <article className="prose prose-neutral dark:prose-invert max-w-3xl w-full px-4 py-4 prose-h2:font-semibold prose-h1:font-bold">
            <AboutSection />
            {/*<ExperienceSection />*/}
            <ProjectsSection />
            {/*<EducationSection />*/}
            <BlogSection />
          </article>
        </div>
      </main>
    </>
  );
}
