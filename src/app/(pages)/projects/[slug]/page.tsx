import { Grid } from "@/components/ui/grid";
import { getProjectBySlug, PROJECTS_DATA, ProjectsComponents } from "@/features/projects";
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
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

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

const { PlainDetail } = ProjectsComponents;

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="relative min-h-screen">
      <div className="relative overflow-hidden w-full">
        <Grid size={35} />
        {/* Clean, plain presentation without cards and boxes */}
        <PlainDetail project={project} />
      </div>
    </article>
  );
}
