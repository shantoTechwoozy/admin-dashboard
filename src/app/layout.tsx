import "@/css/satoshi.css";
import "@/css/style.css";
import ProvideStore from "@/redux/ProvideStore";
import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";
import React from "react";

interface PropsTypes {
  children: React.ReactNode;
}

const RootLayout: React.FC<PropsTypes> = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main className="dark:bg-boxdark-2 dark:text-bodydark">
          <ProvideStore>{children}</ProvideStore>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
