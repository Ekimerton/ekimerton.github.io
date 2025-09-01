import ProjectEntry from "../components/ProjectEntry";
import StatBox from "../components/StatBox";

export default function ProjectsSection({ }) {
  return (
    <>
      <h2>Projects</h2>
      <div className="grid auto-rows-[160px] grid-cols-2 md:grid-cols-3 gap-4">
        <ProjectEntry
          size="large"
          title="Hexcodle"
          content="Wordle for color nerds. Featured on Reddit, Hacker News and Yahoo News."
          imageSrc="/images/Hexcodle.jpeg"
          url="https://hexcodle.com/mini/"
        />
        <StatBox number="5000+" bottomCaption="Users Served Daily" />
        <StatBox
          topCaption={"Over"}
          number="3"
          bottomCaption="Years Of Experience"
        />
        <StatBox
          topCaption="Broke Prod"
          number="4"
          bottomCaption="Times ...And Counting!"
          className="max-md:hidden"
        />
      </div>
    </>
  );
}
