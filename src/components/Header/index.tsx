"use client";
import ThemeSwitcher from "@/themes/ThemeSwitcher";
import { Bell, MagnifyingGlass as Search } from "phosphor-react";
import MobileMenuIcon from "./MobileMenuIcon";

import {
  Avatar,
  AvatarImage,
  Button,
  Input,
  InputIcon,
  Popover,
  PopoverAction,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
} from "keep-react";

const Header = () => {
  return (
    <header className="sticky top-0 flex gap-1 bg-white px-5 py-5">
      <MobileMenuIcon />

      <fieldset className="relative max-w-md">
        <Input placeholder="Search anything..." className="border-none ps-10" />
        <InputIcon>
          <Search size={20} color="#AFBACA" />
        </InputIcon>
      </fieldset>

      <div className="ml-auto">
        <ThemeSwitcher />
      </div>

      {/* notifications  */}
      <Popover placement="bottom">
        <PopoverAction>
          <button className=" rounded-lg border-none p-2.5">
            <Bell size={20} />
          </button>
        </PopoverAction>
        <PopoverContent className="z-20 flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-metal-900">
          <div>
            <Avatar>
              <AvatarImage
                className="bg-white"
                src={""} />
            </Avatar>
          </div>
          <div>
            <PopoverHeading>Keep Designer</PopoverHeading>
            <PopoverDescription>keepdesign@email.com</PopoverDescription>
          </div>
          <Button variant="outline">Follow</Button>
        </PopoverContent>
      </Popover>

      {/* avatar  */}
      <Popover placement="bottom">
        <PopoverAction>
          <Avatar>
            <AvatarImage src={""} />
          </Avatar>
        </PopoverAction>
        <PopoverContent className="z-20 flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-metal-900">
          <div>
            <Avatar>
              <AvatarImage src={""} />
            </Avatar>
          </div>
          <div>
            <PopoverHeading>Keep Designer</PopoverHeading>
            <PopoverDescription>keepdesign@email.com</PopoverDescription>
          </div>
          <Button variant="outline">Follow</Button>
        </PopoverContent>
      </Popover>
    </header>
  );
};

export default Header;
