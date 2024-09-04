import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import PaidList from "@/components/Partial-Payment/PaidList";
export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Designed & Developed By Techwoozy LLC",
};

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Paid List" />
      <div className="flex flex-col gap-10">
        <PaidList />
      </div>
    </DefaultLayout>
  );
};

export default page;
