import ComingSoonClient from "@/app/coming-soon-client";
import siteInfo from "@/config/site-info";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: `Get launch updates and early announcements from ${siteInfo.name}.`,
};

export default function ComingSoonPage() {
  return <ComingSoonClient />;
}
