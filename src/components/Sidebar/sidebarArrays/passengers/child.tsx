import { IconSidebar } from "@/icons";
import { MenuItem } from "../../types";

let prevLink = "/passengers";
export const passengerChildrenMenuList: MenuItem[] = [
  {
    level: 2,
    label: "add passenger",
    route: prevLink + "/add-passenger",
    icon: <IconSidebar.searchEngine />,
  },
  {
    level: 2,
    label: "quick passenger",
    route: prevLink + "/quick-passenger",
    icon: <IconSidebar.searchEngine />,
  },
];
