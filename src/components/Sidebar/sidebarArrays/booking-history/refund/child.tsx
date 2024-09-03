import { MenuItem } from "@/components/Sidebar/types";
import { IconSidebar } from "@/icons";

let prevLink = "/booking-history/refund";
export const BH_refundChildrenLists: MenuItem[] = [
  {
    level: 3,
    label: "history",
    route: prevLink + "/history",
    icon: <IconSidebar.searchEngine />,
  },
  {
    level: 3,
    label: "quotation",
    route: prevLink + "/quotation",
    icon: <IconSidebar.searchEngine />,
  },
];
