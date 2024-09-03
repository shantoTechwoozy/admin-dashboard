import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import SharePNR from "@/components/Share-PNR/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Share-pnr",
  description: "Designed & Developed By Techwoozy LLC",
};

const SharePnrPage = () => {
  return (
    <>
      <Breadcrumb pageName="Share PNR" />
      <div className="flex flex-col gap-10">
        <SharePNR />
      </div>
    </>
  );
};

export default SharePnrPage;
