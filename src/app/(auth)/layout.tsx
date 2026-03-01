import { NavHeader } from "@/components/layout/nav-header";
import siteInfo from "@/config/site-info";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Account",
    template: "%s | Account",
  },
  description: `Manage your ${siteInfo.name} account access, security, and recovery settings.`,
};

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-fixed bg-center bg-cover header ">
      <NavHeader />
      <div className="w-full min-h-screen backdrop-blur flex flex-col items-center justify-center ">
        <div className="pt-14">{children}</div>

        <p className="mt-4 text-sm">
          © 2024 - {siteInfo.name} All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default layout;
