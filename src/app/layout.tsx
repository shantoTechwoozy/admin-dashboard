import "@/css/satoshi.css";
import "@/css/style.css";
import ProvideStore from "@/redux/ProvideStore";
import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
interface PropsTypes {
  children: React.ReactNode;
}

const RootLayout: React.FC<PropsTypes> = ({ children }) => {
  return (
    <html lang="en" className={roboto.className}>
      <body suppressHydrationWarning={true}>
        <main className="dark:bg-boxdark-2 dark:text-bodydark">
          <ProvideStore>{children}</ProvideStore>
        </main>
        <ToastContainer />
      </body>
    </html>
  );
};

export default RootLayout;
