import siteInfo from "@/config/site-info";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Status",
  description: `System status and maintenance updates from ${siteInfo.name}.`,
};

export default function ErrorsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
