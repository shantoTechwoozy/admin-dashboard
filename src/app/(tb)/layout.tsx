"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ReactNode, useState } from "react";

interface ReadonlyChildren {
  readonly children: ReactNode;
}

const DefaultLayout: React.FC<ReadonlyChildren> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section className="flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-1 flex-col lg:ml-[18.125rem]">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="mx-auto w-full p-4 md:p-6 2xl:p-10">{children}</main>
      </div>
    </section>
  );
};

export default DefaultLayout;
