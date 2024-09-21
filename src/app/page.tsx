import HomePage from "@/components/Home/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trip Beyond",
  description: "Designed & Developed by Techwoozy LLC",
};

export default function Home() {
  return (
    <HomePage />
  );
}
