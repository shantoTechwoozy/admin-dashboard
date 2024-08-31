import React, { useState } from "react";
import { IconTopBar } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import ClickOutside from "@/components/ClickOutside";
import Details from "./Details";

interface _PropsTypes {
  username: string;
  designation: string;
  avatarUrl: string;
}

const Profile: React.FC<_PropsTypes> = ({
  username,
  designation,
  avatarUrl,
}) => {
  const [isProfileDetailsOpen, setIsProfileDetailsOpen] = useState(false);
  return (
    <ClickOutside
      onClick={() => setIsProfileDetailsOpen(false)}
      className="relative"
    >
      <Link
        onClick={() => setIsProfileDetailsOpen((prev) => !prev)}
        className="flex items-center gap-2"
        href=""
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium capitalize text-black dark:text-white">
            {username}
          </span>
          <span className="block text-xs capitalize">{designation}</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <Image width={112} height={112} src={avatarUrl} alt={username} />
        </span>
        <IconTopBar.downArrow />
      </Link>

      {isProfileDetailsOpen && <Details />}
    </ClickOutside>
  );
};

export default Profile;
