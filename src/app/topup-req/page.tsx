import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TopupRequest from "@/components/Topup-Request/page";


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
        <TopupRequest/>
      </div>
    </DefaultLayout>
  );
};

export default page;
