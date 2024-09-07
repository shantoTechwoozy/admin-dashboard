import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TicketCancelled from "@/components/bookingHistory/TicketCancelled";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Designed & Developed By Techwoozy LLC",
};

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Ticket Cancelled" />
      <div className="flex flex-col gap-10">
        <TicketCancelled />
      </div>
    </DefaultLayout>
  );
};

export default page;
