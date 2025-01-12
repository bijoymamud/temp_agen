import { Search } from "../search";
import { ThemeCustomizer } from "../theme-customizer";
import { Header } from "../ui/header";
import AppBreadcrumb from "./breadcrumb";

const DashboardNavbar = () => {
  return (
    <Header fixed>
      <AppBreadcrumb />
      <div className="ml-auto flex items-center">
        <Search />
        <ThemeCustomizer />
      </div>
    </Header>
  );
};

export default DashboardNavbar;
