
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <section className="flex">
      <Sidebar />
      <div className="relative flex flex-1 flex-col lg:ml-72.5">
        <Header />
        <main className="mx-auto w-full p-4 md:p-6 2xl:p-10">{children}</main>
      </div>
    </section>
  );
}
