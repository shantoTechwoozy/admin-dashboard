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
import { TbCashRegister, TbTransactionDollar } from "react-icons/tb";

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
          <MdOutlineDashboardCustomize className="mr-2 text-blue-500" size={28} />
        ),
        label: "Dashboard",
        route: "#",
        children: [
          { label: "Search Engine", route: "/search-engine" },
          { label: "Search Engine", route: "/search-engine" }
        ],
      },
      {
        icon: (
          <FaHistory className="mr-2 text-green-500" size={25}/>
        ),
        label: "Booking History",
        route: "#",
        children: [
          { label: "Flight", route: "/tables" },
          { label: "Void", route: "/tables" },
          { label: " Refund", route: "/tables" },
          { label: "Reissue", route: "/tables" },
          { label: "LifeStyle", route: "/tables" },
          { label: "Hotel", route: "/tables" },
          { label: "Visa", route: "/tables" },
          { label: "Holiday", route: "/tables" },
          { label: "Group Tour", route: "/tables" },
          { label: "Proposal History", route: "/tables" },
        ],
      },



      {
        icon: (
        <SlCalender className="mr-2 text-yellow-500" size={25}/>
        ),
        label: "Calendar",
        route: "/calendar",
      },
      {
        icon: (
          <MdCurrencyExchange  className="mr-2 text-red-500" size={25} />

        ),
        label: "Void/Refund/Change",
        route: "/profile",
      },
      {
        icon: (
          <IoCashOutline className="mr-2 text-orange-500" size={25} />

        ),
        label: "Partial Payment",
        route: "/profile",
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
          <TbCashRegister  className="mr-2 text-blue-500" size={25} />

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
          <MdPeople className="mr-2 text-green-500" size={25} />

        ),
        label: "Quick Passengers",
        route: "/profile",
      },

      {
        icon: (
          <HiBriefcase className="mr-2 text-blue-700" size={25} />

        ),
        label: "Company",
        route: "/profile",
      },
      // {
      //   icon: (
      //     <svg
      //       className="fill-current"
      //       width="18"
      //       height="18"
      //       viewBox="0 0 18 18"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <path
      //         d="M1.43425 7.5093H2.278C2.44675 7.5093 2.55925 7.3968 2.58737 7.31243L2.98112 6.32805H5.90612L6.27175 7.31243C6.328 7.48118 6.46862 7.5093 6.58112 7.5093H7.453C7.76237 7.48118 7.87487 7.25618 7.76237 7.03118L5.428 1.4343C5.37175 1.26555 5.3155 1.23743 5.14675 1.23743H3.88112C3.76862 1.23743 3.59987 1.29368 3.57175 1.4343L1.153 7.08743C1.0405 7.2843 1.20925 7.5093 1.43425 7.5093ZM4.47175 2.98118L5.3155 5.17493H3.59987L4.47175 2.98118Z"
      //         fill=""
      //       />
      //       <path
      //         d="M10.1249 2.5031H16.8749C17.2124 2.5031 17.5218 2.22185 17.5218 1.85623C17.5218 1.4906 17.2405 1.20935 16.8749 1.20935H10.1249C9.7874 1.20935 9.47803 1.4906 9.47803 1.85623C9.47803 2.22185 9.75928 2.5031 10.1249 2.5031Z"
      //         fill=""
      //       />
      //       <path
      //         d="M16.8749 6.21558H10.1249C9.7874 6.21558 9.47803 6.49683 9.47803 6.86245C9.47803 7.22808 9.75928 7.50933 10.1249 7.50933H16.8749C17.2124 7.50933 17.5218 7.22808 17.5218 6.86245C17.5218 6.49683 17.2124 6.21558 16.8749 6.21558Z"
      //         fill=""
      //       />
      //       <path
      //         d="M16.875 11.1656H1.77187C1.43438 11.1656 1.125 11.4469 1.125 11.8125C1.125 12.1781 1.40625 12.4594 1.77187 12.4594H16.875C17.2125 12.4594 17.5219 12.1781 17.5219 11.8125C17.5219 11.4469 17.2125 11.1656 16.875 11.1656Z"
      //         fill=""
      //       />
      //       <path
      //         d="M16.875 16.1156H1.77187C1.43438 16.1156 1.125 16.3969 1.125 16.7625C1.125 17.1281 1.40625 17.4094 1.77187 17.4094H16.875C17.2125 17.4094 17.5219 17.1281 17.5219 16.7625C17.5219 16.3969 17.2125 16.1156 16.875 16.1156Z"
      //         fill="white"
      //       />
      //     </svg>
      //   ),
      //   label: "Forms",
      //   route: "#",
      //   children: [
      //     { label: "Form Elements", route: "/forms/form-elements" },
      //     { label: "Form Layout", route: "/forms/form-layout" },
      //   ],
      // },
      // {
      //   icon: (
      //     <svg
      //       className="fill-current"
      //       width="18"
      //       height="19"
      //       viewBox="0 0 18 19"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <g clipPath="url(#clip0_130_9756)">
      //         <path
      //           d="M15.7501 0.55835H2.2501C1.29385 0.55835 0.506348 1.34585 0.506348 2.3021V15.8021C0.506348 16.7584 1.29385 17.574 2.27822 17.574H15.7782C16.7345 17.574 17.5501 16.7865 17.5501 15.8021V2.3021C17.522 1.34585 16.7063 0.55835 15.7501 0.55835ZM6.69385 10.599V6.4646H11.3063V10.5709H6.69385V10.599ZM11.3063 11.8646V16.3083H6.69385V11.8646H11.3063ZM1.77197 6.4646H5.45635V10.5709H1.77197V6.4646ZM12.572 6.4646H16.2563V10.5709H12.572V6.4646ZM2.2501 1.82397H15.7501C16.0313 1.82397 16.2563 2.04897 16.2563 2.33022V5.2271H1.77197V2.3021C1.77197 2.02085 1.96885 1.82397 2.2501 1.82397ZM1.77197 15.8021V11.8646H5.45635V16.3083H2.2501C1.96885 16.3083 1.77197 16.0834 1.77197 15.8021ZM15.7501 16.3083H12.572V11.8646H16.2563V15.8021C16.2563 16.0834 16.0313 16.3083 15.7501 16.3083Z"
      //           fill=""
      //         />
      //       </g>
      //       <defs>
      //         <clipPath id="clip0_130_9756">
      //           <rect
      //             width="18"
      //             height="18"
      //             fill="white"
      //             transform="translate(0 0.052124)"
      //           />
      //         </clipPath>
      //       </defs>
      //     </svg>
      //   ),
      //   label: "Tables",
      //   route: "/tables",
      // },
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
    name: "OTHERS",
    menuItems: [
      // {
      //   icon: (
      //     <svg
      //       className="fill-current"
      //       width="18"
      //       height="19"
      //       viewBox="0 0 18 19"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <g clipPath="url(#clip0_130_9801)">
      //         <path
      //           d="M10.8563 0.55835C10.5188 0.55835 10.2095 0.8396 10.2095 1.20522V6.83022C10.2095 7.16773 10.4907 7.4771 10.8563 7.4771H16.8751C17.0438 7.4771 17.2126 7.39272 17.3251 7.28022C17.4376 7.1396 17.4938 6.97085 17.4938 6.8021C17.2688 3.28647 14.3438 0.55835 10.8563 0.55835ZM11.4751 6.15522V1.8521C13.8095 2.13335 15.6938 3.8771 16.1438 6.18335H11.4751V6.15522Z"
      //           fill=""
      //         />
      //         <path
      //           d="M15.3845 8.7427H9.1126V2.69582C9.1126 2.35832 8.83135 2.07707 8.49385 2.07707C8.40947 2.07707 8.3251 2.07707 8.24072 2.07707C3.96572 2.04895 0.506348 5.53645 0.506348 9.81145C0.506348 14.0864 3.99385 17.5739 8.26885 17.5739C12.5438 17.5739 16.0313 14.0864 16.0313 9.81145C16.0313 9.6427 16.0313 9.47395 16.0032 9.33332C16.0032 8.99582 15.722 8.7427 15.3845 8.7427ZM8.26885 16.3083C4.66885 16.3083 1.77197 13.4114 1.77197 9.81145C1.77197 6.3802 4.47197 3.53957 7.8751 3.3427V9.36145C7.8751 9.69895 8.15635 10.0083 8.52197 10.0083H14.7938C14.6813 13.4958 11.7845 16.3083 8.26885 16.3083Z"
      //           fill=""
      //         />
      //       </g>
      //       <defs>
      //         <clipPath id="clip0_130_9801">
      //           <rect
      //             width="18"
      //             height="18"
      //             fill="white"
      //             transform="translate(0 0.052124)"
      //           />
      //         </clipPath>
      //       </defs>
      //     </svg>
      //   ),
      //   label: "Chart",
      //   route: "/chart",
      // },
      // {
      //   icon: (
      //     <svg
      //       className="fill-current"
      //       width="18"
      //       height="19"
      //       viewBox="0 0 18 19"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <g clipPath="url(#clip0_130_9807)">
      //         <path
      //           d="M15.7501 0.55835H2.2501C1.29385 0.55835 0.506348 1.34585 0.506348 2.3021V7.53335C0.506348 8.4896 1.29385 9.2771 2.2501 9.2771H15.7501C16.7063 9.2771 17.4938 8.4896 17.4938 7.53335V2.3021C17.4938 1.34585 16.7063 0.55835 15.7501 0.55835ZM16.2563 7.53335C16.2563 7.8146 16.0313 8.0396 15.7501 8.0396H2.2501C1.96885 8.0396 1.74385 7.8146 1.74385 7.53335V2.3021C1.74385 2.02085 1.96885 1.79585 2.2501 1.79585H15.7501C16.0313 1.79585 16.2563 2.02085 16.2563 2.3021V7.53335Z"
      //           fill=""
      //         />
      //         <path
      //           d="M6.13135 10.9646H2.2501C1.29385 10.9646 0.506348 11.7521 0.506348 12.7083V15.8021C0.506348 16.7583 1.29385 17.5458 2.2501 17.5458H6.13135C7.0876 17.5458 7.8751 16.7583 7.8751 15.8021V12.7083C7.90322 11.7521 7.11572 10.9646 6.13135 10.9646ZM6.6376 15.8021C6.6376 16.0833 6.4126 16.3083 6.13135 16.3083H2.2501C1.96885 16.3083 1.74385 16.0833 1.74385 15.8021V12.7083C1.74385 12.4271 1.96885 12.2021 2.2501 12.2021H6.13135C6.4126 12.2021 6.6376 12.4271 6.6376 12.7083V15.8021Z"
      //           fill=""
      //         />
      //         <path
      //           d="M15.75 10.9646H11.8688C10.9125 10.9646 10.125 11.7521 10.125 12.7083V15.8021C10.125 16.7583 10.9125 17.5458 11.8688 17.5458H15.75C16.7063 17.5458 17.4938 16.7583 17.4938 15.8021V12.7083C17.4938 11.7521 16.7063 10.9646 15.75 10.9646ZM16.2562 15.8021C16.2562 16.0833 16.0312 16.3083 15.75 16.3083H11.8688C11.5875 16.3083 11.3625 16.0833 11.3625 15.8021V12.7083C11.3625 12.4271 11.5875 12.2021 11.8688 12.2021H15.75C16.0312 12.2021 16.2562 12.4271 16.2562 12.7083V15.8021Z"
      //           fill=""
      //         />
      //       </g>
      //       <defs>
      //         <clipPath id="clip0_130_9807">
      //           <rect
      //             width="18"
      //             height="18"
      //             fill="white"
      //             transform="translate(0 0.052124)"
      //           />
      //         </clipPath>
      //       </defs>
      //     </svg>
      //   ),
      //   label: "UI Elements",
      //   route: "#",
      //   children: [
      //     { label: "Alerts", route: "/ui/alerts" },
      //     { label: "Buttons", route: "/ui/buttons" },
      //   ],
      // },
      {
        icon: (
          <HiUser className="mr-2 text-gray-600" size={25} />
        ),
        label: "Profile",
        route: "/profile",
      },
      {
        icon: (
          <svg
            className="fill-current"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_130_9814)">
              <path
                d="M12.7127 0.55835H9.53457C8.80332 0.55835 8.18457 1.1771 8.18457 1.90835V3.84897C8.18457 4.18647 8.46582 4.46772 8.80332 4.46772C9.14082 4.46772 9.45019 4.18647 9.45019 3.84897V1.88022C9.45019 1.82397 9.47832 1.79585 9.53457 1.79585H12.7127C13.3877 1.79585 13.9221 2.33022 13.9221 3.00522V15.0709C13.9221 15.7459 13.3877 16.2802 12.7127 16.2802H9.53457C9.47832 16.2802 9.45019 16.2521 9.45019 16.1959V14.2552C9.45019 13.9177 9.16894 13.6365 8.80332 13.6365C8.43769 13.6365 8.18457 13.9177 8.18457 14.2552V16.1959C8.18457 16.9271 8.80332 17.5459 9.53457 17.5459H12.7127C14.0908 17.5459 15.1877 16.4209 15.1877 15.0709V3.03335C15.1877 1.65522 14.0627 0.55835 12.7127 0.55835Z"
                fill=""
              />
              <path
                d="M10.4346 8.60205L7.62207 5.7333C7.36895 5.48018 6.97519 5.48018 6.72207 5.7333C6.46895 5.98643 6.46895 6.38018 6.72207 6.6333L8.46582 8.40518H3.45957C3.12207 8.40518 2.84082 8.68643 2.84082 9.02393C2.84082 9.36143 3.12207 9.64268 3.45957 9.64268H8.49395L6.72207 11.4427C6.46895 11.6958 6.46895 12.0896 6.72207 12.3427C6.83457 12.4552 7.00332 12.5114 7.17207 12.5114C7.34082 12.5114 7.50957 12.4552 7.62207 12.3145L10.4346 9.4458C10.6877 9.24893 10.6877 8.85518 10.4346 8.60205Z"
                fill=""
              />
            </g>
            <defs>
              <clipPath id="clip0_130_9814">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="translate(0 0.052124)"
                />
              </clipPath>
            </defs>
          </svg>
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
