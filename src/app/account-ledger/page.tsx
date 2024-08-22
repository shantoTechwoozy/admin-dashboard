import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AccountLedger from "@/components/Report/Account-Ledger/page";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description:
      "Designed & Developed By Techwoozy LLC",
  };

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Account's Ledger" />

      <div className="flex flex-col gap-10">
        <AccountLedger/>
      </div>
    </DefaultLayout>
  );
};

export default page;
