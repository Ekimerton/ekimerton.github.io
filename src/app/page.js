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
        <div className="flex items-center justify-center dark:bg-slate-950 bg-slate-100">
          <article className="prose prose-slate dark:prose-invert dark:prose-p:text-slate-400 prose-p:text-slate-700 dark:prose-blockquote:text-slate-300 prose-blockquote:text-slate-800 max-w-4xl w-full px-5 py-8 prose-h2:font-semibold prose-h1:font-bold">
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
