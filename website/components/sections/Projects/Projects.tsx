import ProjectSection from "./ProjectSection";
import { sections } from "./projects";

export default function Projects() {
  return (
    <>
      {sections.map((section) => (
        <ProjectSection
          key={section.id}
          id={section.id}
          title={section.title}
        />
      ))}
    </>
  );
}