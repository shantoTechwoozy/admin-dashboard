import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SalesReport from "@/components/Report/Sales-Report/page";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Designed & Developed By Techwoozy LLC",
};

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Sales Report" />
      <div className="flex flex-col gap-10">
        <SalesReport/>
      </div>
    </DefaultLayout>
  );
};

export default page;
