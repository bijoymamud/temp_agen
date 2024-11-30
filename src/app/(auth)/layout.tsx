import { NavHeader } from "@/components/layout/nav-header";
import siteInfo from "@/config/site-info";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[url('/b2bhomeMap.png')]  bg-fixed bg-center bg-cover bg-background ">
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
