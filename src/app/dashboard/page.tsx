import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Report from "@/components/Dashboard/report";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Designed & Developed By Techwoozy LLC",
};

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Due List" />
      <div className="flex flex-col gap-10">
        <Report />
      </div>
    </DefaultLayout>
  );
};

export default page;
