import Link from "next/link";
import React from "react";

interface _PropsTypes {
  commentUrl: string;
  date: string;
  comment: string;
}

const NotificationDetailsItem: React.FC<_PropsTypes> = ({
  commentUrl,
  date,
  comment,
}) => {
  return (
    <Link
      className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
      href={commentUrl}
    >
      <p className="text-sm text-black dark:text-white">{comment}</p>

      <p className="text-xs capitalize">{date}</p>
    </Link>
  );
};

export default NotificationDetailsItem;
