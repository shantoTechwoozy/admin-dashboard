import Link from "next/link";
import React from "react";

interface _PropsTypes {
  children: React.ReactNode;
  itemName: string;
  itemUrl?: string;
  onClick?: () => void;
}

const DetailsItem: React.FC<_PropsTypes> = ({
  children,
  itemName,
  itemUrl = "",
  onClick,
}) => {
  return onClick ? (
    <button
      onClick={onClick}
      className="flex items-center gap-3.5 px-6 py-2 text-2xl font-medium duration-300 duration-300 ease-in-out hover:bg-gray hover:text-primary"
    >
      {children}
      <span className="text-lg capitalize">{itemName}</span>
    </button>
  ) : (
    <Link
      href={itemUrl}
      className="flex  items-center gap-3.5 px-6 py-2 text-2xl font-medium duration-300 duration-300 ease-in-out hover:bg-gray hover:text-primary"
    >
      {children}
      <span className="text-lg capitalize">{itemName}</span>
    </Link>
  );
};

export default DetailsItem;
