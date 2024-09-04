import { MenuItem } from "@/components/Sidebar/types";
import { IconSidebar } from "@/icons";

let prevLink = "/booking-history/flight";
export const BH_flightChildrenLists: MenuItem[] = [
  {
    level: 3,
    label: "on hold",
    route: prevLink + "/on-hold",
    icon: <IconSidebar.searchEngine />,
  },
  {
    level: 3,
    label: "issued",
    route: prevLink + "/issued",
    icon: <IconSidebar.searchEngine />,
  },
  {
    level: 3,
    label: "canceled booking",
    route: prevLink + "/canceled-booking",
    icon: <IconSidebar.searchEngine />,
  },
];
