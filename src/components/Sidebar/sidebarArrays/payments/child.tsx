import { IconSidebar } from "@/icons";
import { MenuItem } from "../../types";

let prevLink = "/payments";
export const paymentsChildrenMenuList: MenuItem[] = [
  {
    level: 2,
    label: "bank lists",
    route: prevLink + "/bank-lists",
    icon: <IconSidebar.searchEngine />,
  },
];
