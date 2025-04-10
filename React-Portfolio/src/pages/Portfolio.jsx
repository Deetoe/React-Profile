import Project from '../components/Project';
import projectData from '../data/projects'; // Optional: you can hardcode instead

export default function Portfolio() {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projectData.map(project => (
        <Project key={project.title} {...project} />
      ))}
    </section>
  );
}