import { BiLogOut, BiSupport } from "react-icons/bi";
import { CiUser, CiYoutube } from "react-icons/ci";
import { FaFacebookF, FaGoogle, FaHistory, FaSearchPlus, FaPlane, FaUser, FaUserShield, FaLayerGroup } from "react-icons/fa";
import { FaAngleDown, FaRegCommentDots } from "react-icons/fa6";
import { GrContactInfo, GrMenu } from "react-icons/gr";
import { HiBriefcase, HiOutlineSearch } from "react-icons/hi";
import { IoArrowBack, IoCashOutline, IoSettingsOutline } from "react-icons/io5";
import { CgArrowsExchange } from "react-icons/cg";
import { WiDayHaze } from "react-icons/wi";

import {
  MdOutlineDashboardCustomize,
  MdPeople,
  MdNotificationsNone
  , MdOutlineFlight, MdOutlineTour
} from "react-icons/md";

import {
  TbCashRegister,
  TbLocationSearch,
  TbLogin2,
  TbReport,
  TbTransactionDollar
} from "react-icons/tb";
import { VscGitPullRequestNewChanges, VscIssueReopened } from "react-icons/vsc";


import { GiAvoidance, GiAirplaneDeparture } from "react-icons/gi";
import { RiRefund2Line, RiHotelLine, RiVisaFill } from "react-icons/ri";






import { SlCalender, SlSocialLinkedin } from "react-icons/sl";
import { TfiInstagram, TfiTwitter } from "react-icons/tfi";

// Define icon sets
export const IconTopBar = {
  Menu: GrMenu,
  Search: HiOutlineSearch,
  downArrow: FaAngleDown,
  myProfile: CiUser,
  accountSettings: IoSettingsOutline,
  logout: BiLogOut,
  notification: MdNotificationsNone,
  comments: FaRegCommentDots,
};

export const IconSidebar = {
  backButton: IoArrowBack,
  DownArrow: FaAngleDown,
  dashboard: MdOutlineDashboardCustomize,
  SearchEngine: TbLocationSearch,
  SharePnr: GrContactInfo,
  BookingHistory: FaHistory,
  flight: MdOutlineFlight,
  void: GiAvoidance,
  refund: RiRefund2Line,
  reissue: VscIssueReopened,
  hotel: RiHotelLine,
  visa: RiVisaFill,
  tourPackage: MdOutlineTour,
  groupTour: FaLayerGroup,
  PartialPayment: IoCashOutline,
  report: TbReport,
  AddPassenger: MdPeople,
  calender: SlCalender,
  topUpRequest: VscGitPullRequestNewChanges,
  Support: BiSupport,
  Transaction: TbTransactionDollar,
  Payment: TbCashRegister,
  bankList: HiBriefcase,
  company: HiBriefcase,
  Settings: IoSettingsOutline,
  Profile: TbTransactionDollar,
  authentication: TbLogin2,
};

// Other icon sets can be similarly defined
export const IconDashboard = { authentication: TbLogin2 };
export const IconSearchEngine = { Swap: CgArrowsExchange, AddNew: FaSearchPlus, Day: WiDayHaze, DownArrow: FaAngleDown, Flight: GiAirplaneDeparture };
export const IconSharePnr = { plane: FaPlane };
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
export const IconAuthentication = { user: FaUser, agent: FaUserShield, Facebook: FaFacebookF, Google: FaGoogle };
export const IconFooter = { youtube: CiYoutube, facebook: FaFacebookF, linkedin: SlSocialLinkedin, instagram: TfiInstagram, twitter: TfiTwitter }
