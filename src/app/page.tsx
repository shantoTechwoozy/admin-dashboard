import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Report from "@/app/report/page";

export const metadata: Metadata = {
  title: "Trip Beyond",
  description: "Designed & Developed by Techwoozy LLC",
};

export default function Home() {
  return (
    <DefaultLayout>
      <Report />
    </DefaultLayout>
  );
}
