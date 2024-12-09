import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";

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
        {/*<Navbar />*/}
        <Hero />
        <div className="flex items-center justify-center dark:bg-stone-950 bg-stone-100">
          <article className="prose prose-stone dark:prose-invert dark:prose-p:text-stone-400 prose-p:text-stone-700 dark:prose-blockquote:text-stone-300 prose-blockquote:text-stone-800 max-w-4xl w-full px-5 py-8 prose-h2:font-semibold prose-h1:font-bold">
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
