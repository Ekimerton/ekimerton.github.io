import TextContainer from "./components/TextContainer";
import {
  AboutSection,
  ProjectsSimpleSection,
} from "./sections";

export default function Home() {
  return (
    <>
      <main className="h-full w-full flex justify-center text-pretty">
        <TextContainer className="flex flex-col mt-8">
          <AboutSection />
          <ProjectsSimpleSection />
        </TextContainer>
      </main>
    </>
  );
}
