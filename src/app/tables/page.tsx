import Breadcrumb from "@/components/breadcr/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import DueList from "@/components/Partial-Payment/DueList";
import PaidList from "@/components/Partial-Payment/PaidList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <DueList />
        <PaidList />
        {/* <TableCustom/> */}
        {/* <TableOne />
        <TableTwo />
        <TableThree /> */}
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
