import { IconSidebar } from "@/icons";
import { MenuItem } from "../../types";

let prevLink = "/partial-payment";
export const partialPaymentChildrenMenuList: MenuItem[] = [
  {
    level: 2,
    label: "due list",
    route: prevLink + "/due-list",
    icon: <IconSidebar.searchEngine />,
  },
  {
    level: 2,
    label: "paid list",
    route: prevLink + "/paid-list",
    icon: <IconSidebar.searchEngine />,
  },
];
