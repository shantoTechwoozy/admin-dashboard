import Breadcrumb from "@/components/breadcr/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Designed & Developed By Techwoozy LLC",
};

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Topup Request" />
      <div className="flex flex-col gap-10">
      </div>
    </DefaultLayout>
  );
};

export default page;
