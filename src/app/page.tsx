import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import Report from "@/components/Dashboard/report";

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
