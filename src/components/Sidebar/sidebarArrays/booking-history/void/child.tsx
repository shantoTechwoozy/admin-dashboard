import { MenuItem } from "@/components/Sidebar/types";
import { IconSidebar } from "@/icons";

let prevLink = "/booking-history/void";
export const BH_voidChildrenLists: MenuItem[] = [
  {
    level: 3,
    label: "history",
    route: prevLink + "/history",
    icon: <IconSidebar.SearchEngine />,
  },
  // {
  //   level: 3,
  //   label: "quotation",
  //   route: prevLink + "/quotation",
  //   icon: <IconSidebar.SearchEngine />,
  // },
];
