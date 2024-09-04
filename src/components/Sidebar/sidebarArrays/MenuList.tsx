import { IconSidebar } from "@/icons";
import { MenuGroup } from "../types";
import { bookingHistoryChildrenMenuList } from "./booking-history/child";
import { partialPaymentChildrenMenuList } from "./partial-payment/child";
import { passengerChildrenMenuList } from "./passengers/child";
import { paymentsChildrenMenuList } from "./payments/child";
import { profileChildrenMenuList } from "./profile/child";
import { settingsChildrenMenuList } from "./settings/child";
import { supportChildrenMenuList } from "./support/child";

export const MenuLists: MenuGroup[] = [
  {
    name: "MENU",
    menuItems: [
      {
        level: 1,
        label: "Search Engine",
        route: "/search-engine",
        icon: <IconSidebar.searchEngine />,
      },
      {
        level: 1,
        label: "Share PNR",
        route: "/share-pnr",
        icon: <IconSidebar.sharePnr />,
      },
      {
        level: 1,
        label: "booking history",
        route: "/booking-history",
        icon: <IconSidebar.bookingHistory />,
        children: bookingHistoryChildrenMenuList,
      },
      {
        level: 1,
        label: "passengers",
        route: "/passengers",
        icon: <IconSidebar.addPassenger />,
        children: passengerChildrenMenuList,
      },
      {
        level: 1,
        label: "partial payment",
        route: "/partial-payment",
        icon: <IconSidebar.partialPayment />,
        children: partialPaymentChildrenMenuList,
      },
      {
        level: 1,
        label: "transactions history",
        route: "/transactions-history",
        icon: <IconSidebar.transaction />,
      },
      {
        level: 1,
        label: "payments",
        route: "/payments",
        icon: <IconSidebar.payment />,
        children: paymentsChildrenMenuList,
      },
      {
        level: 1,
        label: "support",
        route: "/support",
        icon: <IconSidebar.support />,
        children: supportChildrenMenuList,
      },
      {
        level: 1,
        label: "profile",
        route: "/profile",
        icon: <IconSidebar.profile />,
        children: profileChildrenMenuList,
      },
      {
        level: 1,
        label: "settings",
        route: "/settings",
        icon: <IconSidebar.settings />,
        children: settingsChildrenMenuList,
      },
    ],
  },
];
