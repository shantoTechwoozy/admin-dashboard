import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Ticketed from "@/components/bookingHistory/Ticketed";


export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Designed & Developed By Techwoozy LLC",
};

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Ticketed" />
      <div className="flex flex-col gap-10">
        <Ticketed />
      </div>
    </DefaultLayout>
  );
};

export default page;
