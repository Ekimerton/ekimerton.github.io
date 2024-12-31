import JobEntry from "../components/JobEntry";

export default function ExperienceSection({}) {
  return (
    <>
      <h2>Work Experience</h2>
      <JobEntry
        title="Software Engineer"
        description="Worked on smoking crack and pushing to prod."
        company="Cachelan"
        time="2023 - 2024"
      />
      <JobEntry
        title="Software Engineer Intern"
        company="Shopify"
        time="2022 - 2023"
      />
    </>
  );
}
