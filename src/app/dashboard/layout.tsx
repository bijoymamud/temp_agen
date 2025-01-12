import { AppSidebar } from "@/components/layout/app-sidebar";
import DashboardNavbar from "@/components/layout/navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SearchProvider } from "@/context/search-context";
import Cookies from "js-cookie";
import { ReactNode } from "react";

const defaultOpen = Cookies.get("sidebar:state") !== "false";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <SearchProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <SidebarInset>
          <DashboardNavbar />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </SearchProvider>
  );
};

export default layout;
