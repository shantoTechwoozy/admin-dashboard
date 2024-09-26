import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex">
      <Sidebar />
      <div className="relative flex flex-1 flex-col ">
        <Header />
        <main className="w-full pl-14">{children}</main>
      </div>
    </section>
  );
}
