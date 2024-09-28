import { IconSidebar } from "@/icons";
import { MenuItem } from "../../types";

let prevLink = "/partial-payment";
export const partialPaymentChildrenMenuList: MenuItem[] = [
  {
    level: 2,
    label: "Due List",
    route: prevLink + "/due-list",
    icon: <IconSidebar.SearchEngine />,
  },
  // {
  //   level: 2,
  //   label: "Paid List",
  //   route: prevLink + "/paid-list",
  //   icon: <IconSidebar.SearchEngine />,
  // },
  // {
  //   level: 3,
  //   label: "Bank List",
  //   route: prevLink + "/bank-lists",
  //   icon: <IconSidebar.SearchEngine />,
  // },
];
