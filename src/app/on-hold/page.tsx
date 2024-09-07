import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import OnHold from "@/components/bookingHistory/flight/OnHold";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Designed & Developed By Techwoozy LLC",
};

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="On-Hold" />
      <div className="flex flex-col gap-10">
        <OnHold />
      </div>
    </DefaultLayout>
  );
};

export default page;
