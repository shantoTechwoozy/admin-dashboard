import { IconSidebar } from "@/icons";
import { MenuItem } from "../../types";

let prevLink = "/support";
export const supportChildrenMenuList: MenuItem[] = [
  {
    level: 2,
    label: "contact",
    route: prevLink + "/contact",
    icon: <IconSidebar.SearchEngine />,
  },
  {
    level: 2,
    label: "faqs",
    route: prevLink + "/faqs",
    icon: <IconSidebar.SearchEngine />,
  },
  {
    level: 2,
    label: "ticketing system",
    route: prevLink + "/ticketing-system",
    icon: <IconSidebar.SearchEngine />,
  },
];
