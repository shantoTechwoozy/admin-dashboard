import { BiLogOut, BiSupport } from "react-icons/bi";
import { CiUser, CiYoutube } from "react-icons/ci";
import { FaFacebookF, FaGoogle, FaHistory, FaPlane, FaUser, FaUserShield } from "react-icons/fa";
import { FaAngleDown, FaRegCommentDots } from "react-icons/fa6";
import { GrContactInfo, GrMenu } from "react-icons/gr";
import { HiBriefcase, HiOutlineSearch } from "react-icons/hi";
import { IoArrowBack, IoCashOutline, IoSettingsOutline } from "react-icons/io5";
import {
  MdOutlineDashboardCustomize,
  MdPeople,
  MdNotificationsNone
} from "react-icons/md";

import {
  TbCashRegister,
  TbLocationSearch,
  TbLogin2,
  TbReport,
  TbTransactionDollar
} from "react-icons/tb";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";

import { MdOutlineFlight } from "react-icons/md";
import { GiAvoidance } from "react-icons/gi";
import { RiRefund2Line } from "react-icons/ri";
import { VscIssueReopened } from "react-icons/vsc";
import { RiHotelLine } from "react-icons/ri";
import { RiVisaFill } from "react-icons/ri";
import { MdOutlineTour } from "react-icons/md";

import { FaLayerGroup } from "react-icons/fa";
import { SlCalender, SlSocialLinkedin } from "react-icons/sl";
import { TfiInstagram, TfiTwitter } from "react-icons/tfi";

// Define icon sets
export const IconTopBar = {
  menu: GrMenu,
  search: HiOutlineSearch,
  downArrow: FaAngleDown,
  myProfile: CiUser,
  accountSettings: IoSettingsOutline,
  logout: BiLogOut,
  notification: MdNotificationsNone,
  comments: FaRegCommentDots,
};

export const IconSidebar = {
  backButton: IoArrowBack,
  downArrow: FaAngleDown,
  dashboard: MdOutlineDashboardCustomize,
  searchEngine: TbLocationSearch,
  sharePnr: GrContactInfo,
  bookingHistory: FaHistory,
  flight: MdOutlineFlight,
  void: GiAvoidance,
  refund: RiRefund2Line,
  reissue: VscIssueReopened,
  hotel: RiHotelLine,
  visa: RiVisaFill,
  tourPackage: MdOutlineTour,
  groupTour: FaLayerGroup,
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
export const IconAuthentication = { user: FaUser, agent: FaUserShield, facebook: FaFacebookF, google: FaGoogle };
export const IconFooter = { youtube: CiYoutube, facebook: FaFacebookF, linkedin: SlSocialLinkedin, instagram: TfiInstagram, twitter: TfiTwitter }
