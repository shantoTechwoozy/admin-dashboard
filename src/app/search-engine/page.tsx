import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SearchEngine from "@/components/search-engine/search-engine";
import SubMenu from "@/components/search-engine/sub-menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Search Flights" />
      <SubMenu />
      <div className="flex flex-col gap-10">
        <SearchEngine />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
