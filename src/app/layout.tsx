import "@/css/satoshi.css";
import "@/css/style.css";
import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";
import React from "react";
import ReduxProvider from "./reduxProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main className="dark:bg-boxdark-2 dark:text-bodydark">
          {/* Wrap the children in the ReduxProvider */}
          <ReduxProvider>{children}</ReduxProvider>
        </main>
      </body>
    </html>
  );
}
