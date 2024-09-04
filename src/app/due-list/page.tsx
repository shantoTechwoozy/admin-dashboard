import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import DueList from "@/components/Partial-Payment/DueList";

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
        <DueList />
      </div>
    </DefaultLayout>
  );
};

export default page;
