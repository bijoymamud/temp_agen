import { Grid } from "@/components/ui/grid";
import {
  getFigmaCaseStudyBySlug,
  getNextAndPrevProject,
  getProjectBySlug,
  PROJECTS_DATA,
  ProjectsComponents,
} from "@/features/projects";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getFigmaCaseStudyBySlug(slug);
  const project = getProjectBySlug(slug);

  if (caseStudy) {
    return {
      title: `${caseStudy.title} | UI/UX Case Study`,
      description: caseStudy.overview,
      openGraph: {
        title: `${caseStudy.title} | Synth-ko Case Study`,
        description: caseStudy.overview,
        images: [caseStudy.coverImage],
      },
    };
  }

  if (project) {
    return {
      title: `${project.title} | Case Study`,
      description: project.description,
      openGraph: {
        title: `${project.title} | Synth-ko`,
        description: project.description,
        images: [project.thumbnail],
      },
    };
  }

  return {
    title: "Project Not Found",
  };
}

const { PlainDetail, FigmaCaseStudyDetail } = ProjectsComponents;

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const caseStudy = getFigmaCaseStudyBySlug(slug);
  const project = getProjectBySlug(slug);

  if (!project && !caseStudy) {
    notFound();
  }

  const { prev, next } = getNextAndPrevProject(slug);

  return (
    <article className="relative min-h-screen">
      <div className="relative overflow-hidden w-full">
        <Grid size={35} />
        {caseStudy ? (
          /* Dedicated UI/UX Figma Case Study Layout */
          <FigmaCaseStudyDetail
            caseStudy={caseStudy}
            prevSlug={prev?.slug}
            nextSlug={next?.slug}
            prevTitle={prev?.title}
            nextTitle={next?.title}
          />
        ) : (
          /* Engineered Full-Stack Project Layout */
          project && <PlainDetail project={project} />
        )}
      </div>
    </article>
  );
}
