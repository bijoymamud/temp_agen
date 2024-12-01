"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    name: "E-commerce Platform",
    description:
      "A fully responsive e-commerce platform with advanced search and filtering capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
    results: [
      "50% increase in conversion rate",
      "30% reduction in page load time",
    ],
  },
  {
    name: "Social Media Dashboard",
    description:
      "A comprehensive dashboard for managing multiple social media accounts with analytics.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    results: [
      "40% improvement in engagement metrics",
      "25% increase in client retention",
    ],
  },
  {
    name: "Real Estate Listing App",
    description:
      "A mobile-first web application for browsing and managing real estate listings.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "GraphQL", "AWS", "Elasticsearch"],
    results: ["60% faster property search", "35% increase in lead generation"],
  },
];

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState("E-commerce Platform");

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 relative overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-5"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C50,50 50,50 100,0 L100,100 L0,100 Z"
          fill="currentColor"
        />
      </svg>
      <h2 className="text-4xl font-bold mb-12 text-center">
        Our Success Stories
      </h2>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          {projects.map((project) => (
            <TabsTrigger key={project.name} value={project.name}>
              {project.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {projects.map((project) => (
          <TabsContent key={project.name} value={project.name}>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full h-64"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index}>{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Results:</h4>
                      <ul className="list-disc list-inside">
                        {project.results.map((result, index) => (
                          <li key={index} className="text-gray-600">
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
