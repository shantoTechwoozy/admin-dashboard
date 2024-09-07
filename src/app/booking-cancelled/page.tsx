import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import BookingCancelled from "@/components/bookingHistory/BookingCancelled";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Designed & Developed By Techwoozy LLC",
};

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Booking-Cancelled" />

      <div className="flex flex-col gap-10">
        <BookingCancelled />
      </div>
    </DefaultLayout>
  );
};

export default page;
