

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";


export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <section className="flex relative">
      <Sidebar />
      <div className="relative flex flex-1 flex-col ">
        <Header />
        <main className="w-full px-2 md:px-12 py-4 md:py-6">{children}</main>
      </div>
    </section>
  );
}
