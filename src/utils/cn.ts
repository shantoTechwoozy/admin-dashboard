import clsx from "clsx";
import { twMerge } from "tailwind-merge"; // Assuming `tailwind-merge` is installed

function cn(...classes: any): string {
  return twMerge(clsx(...classes));
}

export default cn;
