import { MenuItem } from "@/components/Sidebar/types";
import { IconSidebar } from "@/icons";

let prevLink = "/booking-history/reissue";
export const BH_reissueChildrenLists: MenuItem[] = [
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
