import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  FileText,
  Lightbulb,
  Palette,
  Rocket,
  Search,
  Wrench,
} from "lucide-react";

const developmentStages = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Idea Generation",
    description:
      "Brainstormed website concepts, identified the target audience, and outlined key features.",
    skills: ["Market Research", "Brainstorming", "User Personas"],
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Planning",
    description:
      "Created a detailed project plan, including timelines, milestones, and resource allocation.",
    skills: [
      "Project Management",
      "Agile Methodologies",
      "Resource Allocation",
    ],
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Research & Analysis",
    description:
      "Conducted competitor analysis, user research, and feasibility studies to validate the concept.",
    skills: ["Competitor Analysis", "User Research", "Feasibility Studies"],
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    description:
      "Designed wireframes and mockups to define the website's structure and user experience.",
    skills: ["Wireframing", "Prototyping", "User Testing"],
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Development",
    description:
      "Started front-end and back-end development, ensuring responsiveness and scalability.",
    skills: [
      "Front-end Development",
      "Back-end Development",
      "API Integration",
    ],
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Delivery",
    description:
      "Deployed the website to the production environment after thorough testing and debugging.",
    skills: ["Quality Assurance", "Deployment", "Performance Optimization"],
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Maintenance",
    description:
      "Ongoing updates and support to ensure the website remains secure, fast, and functional.",
    skills: ["Performance Monitoring", "Security Updates", "User Support"],
  },
];

export default function Timeline() {
  return (
    <div className="">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Our Development Process
      </h2>
      <div className="w-full relative overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full  opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L100,0 C60,50 40,50 0,100 Z" fill="currentColor" />
        </svg>

        <div className="relative pt-9">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-300 " />
          {developmentStages.map((stage, index) => (
            <div key={index} className="mb-8 flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center mr-4 z-10">
                {stage.icon}
              </div>
              <Card className="flex-grow ml-4">
                <CardHeader>
                  <CardTitle>{stage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {stage.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stage.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex}>{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
