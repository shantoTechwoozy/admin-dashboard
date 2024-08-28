import { BiSupport } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { HiBriefcase } from "react-icons/hi";
import { IoCashOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize, MdPeople } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import {
  TbCashRegister,
  TbLocationSearch,
  TbLogin2,
  TbReport,
  TbTransactionDollar,
} from "react-icons/tb";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { IoArrowBack } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { GrMenu } from "react-icons/gr";
import { HiOutlineSearch } from "react-icons/hi";

// Define icon sets
export const IconTopBar = {
  menu: GrMenu,
  search: HiOutlineSearch,
};

export const IconSidebar = {
  backButton: IoArrowBack,
  downArrow: FaAngleDown,
  dashboard: MdOutlineDashboardCustomize,
  searchEngine: TbLocationSearch,
  sharePnr: GrContactInfo,
  bookingHistory: FaHistory,
  partialPayment: IoCashOutline,
  report: TbReport,
  addPassenger: MdPeople,
  calender: SlCalender,
  topUpRequest: VscGitPullRequestNewChanges,
  support: BiSupport,
  transaction: TbTransactionDollar,
  payment: TbCashRegister,
  bankList: HiBriefcase,
  company: HiBriefcase,
  settings: IoSettingsOutline,
  profile: TbTransactionDollar,
  authentication: TbLogin2,
};

// Other icon sets can be similarly defined
export const IconDashboard = { authentication: TbLogin2 };
export const IconSearchEngine = { authentication: TbLogin2 };
export const IconSharePnr = { authentication: TbLogin2 };
export const IconBookingHistory = { authentication: TbLogin2 };
export const IconPartialPayment = { authentication: TbLogin2 };
export const IconReport = { authentication: TbLogin2 };
export const IconAddPassenger = { authentication: TbLogin2 };
export const IconCalender = { authentication: TbLogin2 };
export const IconTopUpRequest = { authentication: TbLogin2 };
export const IconSupport = { authentication: TbLogin2 };
export const IconTransaction = { authentication: TbLogin2 };
export const IconPayment = { authentication: TbLogin2 };
export const IconBankList = { authentication: TbLogin2 };
export const IconCompany = { authentication: TbLogin2 };
export const IconSettings = { authentication: TbLogin2 };
export const IconProfile = { authentication: TbLogin2 };
export const IconAuthentication = { authentication: TbLogin2 };
