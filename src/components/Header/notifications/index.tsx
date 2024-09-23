"use client"
import ClickOutside from "@/components/ClickOutside";
import { IconTopBar } from "@/icons";
import { useState } from "react";
import IconHolderBtn from "../IconHolderBtn";
import Notifier from "../Notifier";
import NotificationDetails from "./NotificationDetails";

const Notifications = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <IconHolderBtn
        onClick={() => {
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        }}
      >
        <Notifier isNotifying={notifying} />
        <IconTopBar.notification className="text-xl" />
      </IconHolderBtn>

      {dropdownOpen && <NotificationDetails />}
    </ClickOutside>
  );
};

export default Notifications;
