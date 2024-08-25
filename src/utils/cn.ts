import clsx from 'clsx';
import { twMerge } from 'tailwind-merge'; // Assuming `tailwind-merge` is installed

type ClassValue = string | number | boolean | undefined | null | ClassValue[];

function cn(...classes: ClassValue[]): string {
  // Use clsx to handle conditional class names
  const combinedClasses = clsx(...classes);

  // Use twMerge to handle Tailwind CSS class merging
  return twMerge(combinedClasses);
}

export default cn;
