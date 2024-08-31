import ClickOutside from "@/components/ClickOutside";
import Link from "next/link";
import { useState } from "react";
import { IconTopBar } from "@/icons";
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
