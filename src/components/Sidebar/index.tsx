"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import { HiMenu, HiX, HiUser, HiCreditCard, HiBriefcase } from 'react-icons/hi';
import { FaPlane, FaHotel, FaCcVisa, FaCaretDown, FaCreativeCommonsZero } from 'react-icons/fa';
import { MdOutlineArrowDropDownCircle, MdPeople } from "react-icons/md";
import { FcSearch, FcReadingEbook, FcMoneyTransfer, FcHeatMap, FcCurrencyExchange } from "react-icons/fc";
import { RiEmotionHappyLine, RiRefund2Fill } from 'react-icons/ri';
import { AiOutlineIssuesClose } from "react-icons/ai";
import { BsClockHistory, BsChatLeftQuote } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdCurrencyExchange } from "react-icons/md";
import { IoCashOutline, IoSettingsOutline } from "react-icons/io5";
import { TbCashRegister, TbLogin2, TbTransactionDollar } from "react-icons/tb";
import { TbLocationSearch } from "react-icons/tb";
import { GrContactInfo } from "react-icons/gr";
import { TbReport } from "react-icons/tb";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "MENU",
    menuItems: [
      {
        icon: (
          <MdOutlineDashboardCustomize className="mr-2 text-blue-500" size={25} />
        ),
        label: "Dashboard",
        route: "/",

      },
      {
        icon: (
          <TbLocationSearch className="mr-2 text-white" size={25} />
        ),
        label: "Search Engine",
        route: "/search-engine",

      },
      {
        icon: (
          <GrContactInfo className="mr-2 text-violet-400" size={25} />
        ),
        label: "Share PNR",
        route: "/share-pnr",

      },
      {
        icon: (
          <FaHistory className="mr-2 text-meta-5" size={25} />
        ),
        label: "Booking History",
        route: "#",
        children: [
          { label: "On Hold", route: "/on-hold" },
          { label: "Booking Cancelled", route: "/booking-cancelled" },
          { label: " Ticketed", route: "/ticketed" },
          { label: "Ticket Cancelled", route: "/ticket-cancelled" },
          { label: "All", route: "/all-booking" },
        ],
      },
      {
        icon: (
          <IoCashOutline className="mr-2 text-green-500" size={25} />
        ),
        label: "Partial Payment",
        route: "#",
        children: [
          { label: "Due List", route: "/due-list" },
          { label: "Paid List", route: "/paid-list" },
        ],
      },
      {
        icon: (
          <TbReport className="mr-2 text-red" size={25} />
        ),
        label: "Report",
        route: "#",
        children: [
          { label: "Sales Report", route: "/sales-report" },
          { label: "Account Ledger", route: "/account-ledger" },
          { label: "Refund Status", route: "/refund-status" },
        ],
      },
      {
        icon: (
          <MdPeople className="mr-2 text-sky-300" size={25} />
        ),
        label: "Add Passenger",
        route: "/add-passenger",
        // children: [
        //   { label: "Quick Passenger", route: "/tables" },

        // ],
      },


      {
        icon: (
          <SlCalender className="mr-2 text-yellow-500" size={25} />
        ),
        label: "Calendar",
        route: "/calendar",
      },
      {
        icon: (
          <VscGitPullRequestNewChanges className="mr-2 text-orange-500" size={25} />

        ),
        label: "Topup Request",
        route: "/topup-req",
      },
      {
        icon: (
          <BiSupport className="mr-2 text-orange-500" size={25} />

        ),
        label: "Support",
        route: "/support",
      },
      {
        icon: (
          <TbTransactionDollar className="mr-2 text-green-500" size={25} />

        ),
        label: "Transaction",
        route: "/profile",
      },
      {
        icon: (
          <TbCashRegister className="mr-2 text-blue-500" size={25} />

        ),
        label: "Payment",
        route: "/profile",
      },
      {
        icon: (
          <HiBriefcase className="mr-2 text-purple-500" size={25} />

        ),
        label: "Bank List",
        route: "/profile",
      },
      {
        icon: (
          <HiBriefcase className="mr-2 text-blue-700" size={25} />

        ),
        label: "Company",
        route: "/profile",
      },

      {
        icon: (
          <IoSettingsOutline className="mr-2 text-orange-700" size={25} />

        ),
        label: "Settings",
        route: "/settings",
      },
    ],
  },

  {
    name: "REGISTRATIONS",
    menuItems: [

      {
        icon: (
          <HiUser className="mr-2 text-gray-600" size={25} />
        ),
        label: "Profile",
        route: "/profile",
      },
      {
        icon: (
          <TbLogin2 className="mr-2 text-white" size={25} />

        ),
        label: "Authentication",
        route: "#",
        children: [
          { label: "Sign In", route: "/auth/signin" },
          { label: "Sign Up", route: "/auth/signup" },
        ],
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <Link href="/">
            <h1 className="text-xl text-white font-bold ">Admin Dashboard</h1>
            {/* <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
              priority
            /> */}
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
