import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AllHistory from "@/components/bookingHistory/allHistory/AllHistory";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Designed & Developed By Techwoozy LLC",
};

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="All Bookings" />

      <div className="flex flex-col gap-10">
        <AllHistory />
      </div>
    </DefaultLayout>
  );
};

export default page;
