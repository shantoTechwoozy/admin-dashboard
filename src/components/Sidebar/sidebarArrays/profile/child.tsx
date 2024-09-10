import { IconSidebar } from "@/icons";
import { MenuItem } from "../../types";

let prevLink = "/profile";
export const profileChildrenMenuList: MenuItem[] = [
  {
    level: 2,
    label: "user",
    route: prevLink + "/user",
    icon: <IconSidebar.SearchEngine />,
  },
  {
    level: 2,
    label: "company",
    route: prevLink + "/company",
    icon: <IconSidebar.SearchEngine />,
  },
  {
    level: 2,
    label: "authentication",
    route: prevLink + "/authentication",
    icon: <IconSidebar.SearchEngine />,
  },
];
