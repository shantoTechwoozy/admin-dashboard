"use client";
import { useTheme } from "next-themes";
import { MoonStars, SunDim } from "phosphor-react";
import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownList,
} from "keep-react";

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();
  const [client, setClient] = useState(false);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      setClient(true);
    }
    return () => {
      ignore = true;
    };
  }, []);

  return client ? (
    <Dropdown placement="bottom-start">
      <DropdownAction asChild>
        <button className="bg-primary-25 rounded-lg border p-2.5 dark:bg-white">
          <MoonStars size={20} color="#1C222B" className="hidden dark:block" />
          <SunDim size={20} color="#444" className="block dark:hidden" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownAction>
      <DropdownContent className="w-[150px] dark:bg-metal-900">
        <DropdownList className="flex flex-col items-start">
          <button
            className="hover:bg-primary-25 block w-full rounded-lg p-2 text-body-4 font-medium text-metal-900 dark:text-white dark:hover:bg-metal-800"
            onClick={() => setTheme("light")}
          >
            Light
          </button>
          <button
            className="hover:bg-primary-25 block w-full rounded-lg p-2 text-body-4 font-medium text-metal-900 dark:text-white dark:hover:bg-metal-800"
            onClick={() => setTheme("dark")}
          >
            Dark
          </button>
          <button
            className="hover:bg-primary-25 block w-full rounded-lg p-2 text-body-4 font-medium text-metal-900 dark:text-white dark:hover:bg-metal-800"
            onClick={() => setTheme("system")}
          >
            System
          </button>
        </DropdownList>
      </DropdownContent>
    </Dropdown>
  ) : null;
};

export default ThemeSwitcher;
