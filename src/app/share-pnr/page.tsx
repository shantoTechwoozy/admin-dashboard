import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SalesReport from "@/components/Report/Sales-Report/page";
import SharePNR from "@/components/Share-PNR/page";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Designed & Developed By Techwoozy LLC",
};

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Share PNR" />
      <div className="flex flex-col gap-10">
       <SharePNR/>
      </div>
    </DefaultLayout>
  );
};

export default page;
