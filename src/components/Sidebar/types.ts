import { ReactNode } from "react";

export interface MenuItem {
  level: number;
  label: string;
  route?: string;
  icon?: ReactNode;
  children?: MenuItem[];
}

export interface MenuGroup {
  name: string;
  menuItems: MenuItem[];
}
