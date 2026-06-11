import { notFound } from "next/navigation";
import ProjectDetailHero from "@/components/work/project/ProjectDetailHero";
import ProjectMetadata from "@/components/work/project/ProjectMetadata";
import ProjectNarrative from "@/components/work/project/ProjectNarrative";
import ProjectVisualShowcase from "@/components/work/project/ProjectVisualShowcase";
import ProjectUpNext from "@/components/work/project/ProjectUpNext";
import {
  projects,
  getProjectBySlug,
  getNextProject,
} from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found — Prawitech" };
  }

  return {
    title: `${project.title} — Prawitech`,
    description: project.detail.summary[0],
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);

  return (
    <div className="flex flex-col">
      <ProjectDetailHero project={project} />
      <ProjectMetadata project={project} />
      <ProjectNarrative project={project} />
      <ProjectVisualShowcase project={project} />
      <ProjectUpNext nextProject={nextProject} />
    </div>
  );
}
