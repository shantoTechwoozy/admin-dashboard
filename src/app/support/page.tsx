import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import SupportPage from "@/components/support/page";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Designed & Developed By Techwoozy LLC",
};

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Contact Us" />
      <div className="flex flex-col gap-10">
       <SupportPage/>
      </div>
    </DefaultLayout>
  );
};

export default page;
