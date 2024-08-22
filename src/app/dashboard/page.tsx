import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import DueList from "@/components/Partial-Payment/Due-List/page";
import Report from "@/components/Dashboard/report";

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
        <Report/>
      </div>
    </DefaultLayout>
  );
};

export default page;
