import "@/css/satoshi.css";
import "@/css/style.css";
import { store } from "@/redux/store";
import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";
import React from "react";
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main className="dark:bg-boxdark-2 dark:text-bodydark">
          <Provider store={store}>
            {children}
          </Provider>
        </main>
      </body>
    </html>
  );
}
