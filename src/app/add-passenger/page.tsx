import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddPassenger from "@/components/Passenger/AddPassenger";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Designed & Developed By Techwoozy LLC",
};

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Add Passenger" />
      <div className="flex flex-col gap-10">
        <AddPassenger />
      </div>
    </DefaultLayout>
  );
};

export default page;
