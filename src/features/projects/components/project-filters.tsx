"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { PROJECT_CATEGORIES } from "../projects.data";
import { ProjectCategory } from "../projects.type";

interface ProjectFiltersProps {
  selectedCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
}

export function ProjectFilters({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalCount,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
        {PROJECT_CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={cn(
                "whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border",
                isSelected
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-background/80 text-muted-foreground border-border/60 hover:text-foreground hover:bg-muted/60"
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Search Input */}
      <div className="relative w-full md:w-64">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        <Input
          type="search"
          placeholder={`Search ${totalCount} projects...`}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9 h-9 text-xs sm:text-sm bg-background/60 border-border/60 rounded-full focus-visible:ring-primary/40"
        />
      </div>
    </div>
  );
}
