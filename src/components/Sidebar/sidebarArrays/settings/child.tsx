import { IconSidebar } from "@/icons";
import { MenuItem } from "../../types";

let prevLink = "/settings";
export const settingsChildrenMenuList: MenuItem[] = [
  {
    level: 2,
    label: "portal",
    route: prevLink + "/portal",
    icon: <IconSidebar.searchEngine />,
  },
  {
    level: 2,
    label: "notifications",
    route: prevLink + "/notifications",
    icon: <IconSidebar.searchEngine />,
  },
  {
    level: 2,
    label: "user",
    route: prevLink + "/user",
    icon: <IconSidebar.searchEngine />,
  },
];
