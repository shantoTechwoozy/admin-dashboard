import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import RefundStatus from "@/components/Report/Refund-Status/page";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Designed & Developed By Techwoozy LLC",
};

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Refund Status" />
      <div className="flex flex-col gap-10">
        <RefundStatus/>
      </div>
    </DefaultLayout>
  );
};

export default page;
