"use client";

import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Grid } from "@/components/ui/grid";
import siteInfo from "@/config/site-info";
import { ArrowUpRight, ChevronDown, Mail, UserX } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Role {
  id: string;
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
}

const previewRoles: Role[] = [
  {
    id: "1",
    title: "Senior Software Developer",
    type: "Full Time",
    location: "Dhaka, Bangladesh • Remote",
    department: "Engineering",
    description:
      "Responsible for architecting performant full-stack systems, scalable web applications, and backend APIs using Next.js, Node.js, and TypeScript.",
  },
  {
    id: "2",
    title: "Senior Full-Stack Engineer",
    type: "Full Time",
    location: "Dhaka, Bangladesh • Remote",
    department: "Engineering",
    description:
      "Leading technical feature execution across modern web ecosystems, cloud infrastructure integrations, and database architectures.",
  },
  {
    id: "3",
    title: "Junior UI/UX Designer",
    type: "Full Time",
    location: "Dhaka, Bangladesh • Hybrid",
    department: "Design & Product",
    description:
      "Creating modern design systems, fluid micro-interactions, responsive layouts, and collaborating closely with frontend engineers to ship pixel-perfect UI.",
  },
];

export default function CareersPage() {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const contactEmail =
    siteInfo.companyInfo?.emails?.[0] || "synthkofficial@gmail.com";

  return (
    <>
      <div className="header">
        <Container className="h-40 lg:h-56 flex items-end justify-start max-w-screen-xl">
          <div className="bg-primary/20 backdrop-blur-sm px-3 py-2 rounded-md mb-2">
            <h1 className="text-xl lg:text-4xl text-primary font-bold">
              Careers & Opportunities
            </h1>
          </div>
        </Container>
      </div>

      <div className="overflow-hidden relative py-16 md:py-24">
        <Grid size={35} />

        <Container className="relative z-10 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Title, Contact & Hiring Status */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                  Our Open <br className="hidden sm:inline" />
                  Roles
                </h2>

                <div className="pt-2 space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Or contact us with
                  </p>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="inline-block text-base font-semibold text-primary hover:text-primary/80 hover:underline underline-offset-4 transition-colors"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Roles List (Disabled State with Theme Colors) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Notice Banner */}
              <div className="">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <UserX className="w-4 h-4" />
                  <span>Hiring Currently Paused</span>
                </div>
              </div>

              <div className="divide-y divide-border border-t border-border">
                {previewRoles.map((role) => {
                  const isExpanded = expandedRole === role.id;
                  return (
                    <div
                      key={role.id}
                      className="py-8 space-y-4 opacity-75 hover:opacity-100 transition-opacity"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">
                              OPEN ROLES
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                              Closed
                            </span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                            {role.title}
                          </h3>

                          <p className="text-sm text-muted-foreground">
                            {role.type} &nbsp;•&nbsp; {role.location}
                          </p>
                        </div>

                        <div className="flex items-center gap-3 self-start md:self-center shrink-0">
                          {/* Accordion toggle button */}
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedRole(isExpanded ? null : role.id)
                            }
                            aria-label="Toggle role details"
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary text-muted-foreground transition-colors"
                          >
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-200 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* Disabled Submit Button in Theme Primary */}
                          <Button
                            disabled
                            className="bg-primary/50 cursor-not-allowed text-primary-foreground rounded-full px-6 py-2.5 font-medium shadow-none opacity-60"
                          >
                            Applications Closed
                            <ArrowUpRight className="w-4 h-4 ml-1 opacity-50" />
                          </Button>
                        </div>
                      </div>

                      {/* Expandable Role Description */}
                      {isExpanded && (
                        <div className="pt-4 text-sm text-muted-foreground leading-relaxed border-t border-border/50">
                          <p>{role.description}</p>
                          <p className="mt-2 text-xs italic text-muted-foreground/80">
                            * We are currently not accepting applications for
                            this role. Follow our social channels for reopening
                            dates.
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
