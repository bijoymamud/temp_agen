import siteInfo from "@/config/site-info";
import MaintenanceClient from "@/features/errors/components/maintenance-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance",
  description: `${siteInfo.name} is currently under planned maintenance.`,
};

export default function MaintenancePage() {
  return <MaintenanceClient />;
}
