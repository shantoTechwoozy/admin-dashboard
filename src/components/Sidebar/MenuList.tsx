import { IconSidebar } from "@/icons";
import { ReactNode } from "react";

interface MenuItem {
  label: string;
  route: string;
  icon?: ReactNode;
  children?: MenuItem[];
}

interface MenuGroup {
  name: string;
  menuItems: MenuItem[];
}

export const MenuLists: MenuGroup[] = [
  {
    name: "MENU",
    menuItems: [
      {
        label: "Dashboard",
        route: "/",
        icon: (
          <IconSidebar.dashboard className="mr-2 text-blue-500" size={25} />
        ),
      },
      {
        label: "Search Engine",
        route: "/search-engine",
        icon: (
          <IconSidebar.searchEngine className="mr-2 text-white" size={25} />
        ),
      },
      {
        label: "Share PNR",
        route: "/share-pnr",
        icon: (
          <IconSidebar.sharePnr className="mr-2 text-violet-400" size={25} />
        ),
      },
      {
        label: "Booking History",
        route: "#",
        icon: (
          <IconSidebar.bookingHistory className="mr-2 text-meta-5" size={25} />
        ),
        children: [
          { label: "On Hold", route: "/on-hold" },
          { label: "Booking Cancelled", route: "/booking-cancelled" },
          { label: "Ticketed", route: "/ticketed" },
          { label: "Ticket Cancelled", route: "/ticket-cancelled" },
          { label: "All", route: "/all-booking" },
        ],
      },
      {
        label: "Partial Payment",
        route: "#",
        icon: (
          <IconSidebar.partialPayment
            className="mr-2 text-green-500"
            size={25}
          />
        ),
        children: [
          { label: "Due List", route: "/due-list" },
          { label: "Paid List", route: "/paid-list" },
        ],
      },
      {
        label: "Report",
        route: "#",
        icon: <IconSidebar.report className="text-red-500 mr-2" size={25} />,
        children: [
          { label: "Sales Report", route: "/sales-report" },
          { label: "Account Ledger", route: "/account-ledger" },
          { label: "Refund Status", route: "/refund-status" },
        ],
      },
      {
        label: "Add Passenger",
        route: "/add-passenger",
        icon: (
          <IconSidebar.addPassenger className="mr-2 text-sky-300" size={25} />
        ),
      },
      {
        label: "Calendar",
        route: "/calendar",
        icon: (
          <IconSidebar.calender className="mr-2 text-yellow-500" size={25} />
        ),
      },
      {
        label: "Topup Request",
        route: "/topup-req",
        icon: (
          <IconSidebar.topUpRequest
            className="mr-2 text-orange-500"
            size={25}
          />
        ),
      },
      {
        label: "Support",
        route: "/support",
        icon: (
          <IconSidebar.support className="mr-2 text-orange-500" size={25} />
        ),
      },
      {
        label: "Transaction",
        route: "/profile",
        icon: (
          <IconSidebar.transaction className="mr-2 text-green-500" size={25} />
        ),
      },
      {
        label: "Payment",
        route: "/profile",
        icon: <IconSidebar.payment className="mr-2 text-blue-500" size={25} />,
      },
      {
        label: "Bank List",
        route: "/profile",
        icon: (
          <IconSidebar.bankList className="mr-2 text-purple-500" size={25} />
        ),
      },
      {
        label: "Company",
        route: "/profile",
        icon: <IconSidebar.company className="mr-2 text-blue-700" size={25} />,
      },
      {
        label: "Settings",
        route: "/settings",
        icon: (
          <IconSidebar.settings className="mr-2 text-orange-700" size={25} />
        ),
      },
    ],
  },
  {
    name: "REGISTRATIONS",
    menuItems: [
      {
        label: "Profile",
        route: "/profile",
        icon: <IconSidebar.profile className="text-gray-600 mr-2" size={25} />,
      },
      {
        label: "Authentication",
        route: "#",
        icon: (
          <IconSidebar.authentication className="mr-2 text-white" size={25} />
        ),
        children: [
          { label: "Sign In", route: "/auth/signin" },
          { label: "Sign Up", route: "/auth/signup" },
        ],
      },
    ],
  },
];
