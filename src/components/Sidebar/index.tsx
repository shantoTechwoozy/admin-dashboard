"use client";

import ClickOutside from "@/components/ClickOutside";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import useLocalStorage from "@/hooks/useLocalStorage";
import { IconSidebar } from "@/icons";

import cn from "@/utils/cn";
import Logo from "../common/Logo";

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
          <IconSidebar.dashboard className="mr-2 text-blue-500" size={25} />
        ),
        label: "Dashboard",
        route: "/",
      },
      {
        icon: (
          <IconSidebar.searchEngine className="mr-2 text-white" size={25} />
        ),
        label: "Search Engine",
        route: "/search-engine",
      },
      {
        icon: (
          <IconSidebar.sharePnr className="mr-2 text-violet-400" size={25} />
        ),
        label: "Share PNR",
        route: "/share-pnr",
      },
      {
        icon: (
          <IconSidebar.bookingHistory className="mr-2 text-meta-5" size={25} />
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
          <IconSidebar.partialPayment
            className="mr-2 text-green-500"
            size={25}
          />
        ),
        label: "Partial Payment",
        route: "#",
        children: [
          { label: "Due List", route: "/due-list" },
          { label: "Paid List", route: "/paid-list" },
        ],
      },
      {
        icon: <IconSidebar.report className="mr-2 text-red" size={25} />,
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
          <IconSidebar.addPassenger className="mr-2 text-sky-300" size={25} />
        ),
        label: "Add Passenger",
        route: "/add-passenger",
      },

      {
        icon: (
          <IconSidebar.calender className="mr-2 text-yellow-500" size={25} />
        ),
        label: "Calendar",
        route: "/calendar",
      },
      {
        icon: (
          <IconSidebar.topUpRequest
            className="mr-2 text-orange-500"
            size={25}
          />
        ),
        label: "Topup Request",
        route: "/topup-req",
      },
      {
        icon: (
          <IconSidebar.support className="mr-2 text-orange-500" size={25} />
        ),
        label: "Support",
        route: "/support",
      },
      {
        icon: (
          <IconSidebar.transaction className="mr-2 text-green-500" size={25} />
        ),
        label: "Transaction",
        route: "/profile",
      },
      {
        icon: <IconSidebar.payment className="mr-2 text-blue-500" size={25} />,
        label: "Payment",
        route: "/profile",
      },
      {
        icon: (
          <IconSidebar.bankList className="mr-2 text-purple-500" size={25} />
        ),
        label: "Bank List",
        route: "/profile",
      },
      {
        icon: <IconSidebar.company className="mr-2 text-blue-700" size={25} />,
        label: "Company",
        route: "/profile",
      },

      {
        icon: (
          <IconSidebar.settings className="mr-2 text-orange-700" size={25} />
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
        icon: <IconSidebar.profile className="text-gray-600 mr-2" size={25} />,
        label: "Profile",
        route: "/profile",
      },
      {
        icon: (
          <IconSidebar.authentication className="mr-2 text-white" size={25} />
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
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={cn(
          `fixed left-0 top-0 z-9999 flex h-screen w-72.5 -translate-x-full flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0`,
          {
            "translate-x-0": sidebarOpen,
          },
        )}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-center gap-3 px-6 py-5.5 lg:py-6.5">
          <Logo />

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <IconSidebar.backButton className="text-2xl" />
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-2 px-4 py-4 lg:mt-2 lg:px-6">
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
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
