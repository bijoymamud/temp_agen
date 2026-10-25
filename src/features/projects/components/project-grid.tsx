"use client";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import { PROJECTS_DATA } from "../projects.data";
import { ProjectCategory } from "../projects.type";
import { ProjectCard } from "./project-card";
import { ProjectFilters } from "./project-filters";

export function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((t) => t.toLowerCase().includes(query)) ||
        project.techStack.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <section className="py-12 md:py-16">
      <Container className="max-w-screen-xl space-y-8">
        {/* Filters & Search Bar */}
        <ProjectFilters
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalCount={PROJECTS_DATA.length}
        />

        {/* Results summary if searching */}
        {searchQuery && (
          <div className="text-xs text-muted-foreground flex items-center justify-between">
            <span>
              Found {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"} for &quot;
              {searchQuery}&quot;
            </span>
            <Button
              variant="link"
              size="sm"
              onClick={handleResetFilters}
              className="text-xs p-0 h-auto text-primary"
            >
              Clear search
            </Button>
          </div>
        )}

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center space-y-3 rounded-2xl border border-dashed border-border/80 bg-muted/20">
            <h3 className="text-lg font-semibold text-foreground">No projects found</h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              We couldn&apos;t find any projects matching your current filter criteria.
            </p>
            <Button variant="outline" size="sm" onClick={handleResetFilters}>
              Reset Filters
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
