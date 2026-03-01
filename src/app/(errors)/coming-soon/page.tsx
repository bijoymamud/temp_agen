import siteInfo from "@/config/site-info";
import ComingSoonClient from "@/features/errors/components/coming-soon-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: `Get launch updates and early announcements from ${siteInfo.name}.`,
};

export default function ComingSoonPage() {
  return <ComingSoonClient />;
}
