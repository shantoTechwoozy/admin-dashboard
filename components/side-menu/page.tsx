"use client";

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX, HiDocumentText, HiUser, HiCreditCard, HiBriefcase } from 'react-icons/hi';
import { FaPlane, FaHotel, FaCcVisa, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
import { FcSearch } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { MdOutlineCancel } from 'react-icons/md';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { FcMoneyTransfer } from "react-icons/fc";
import { FcHeatMap } from "react-icons/fc";
import { RiRefund2Fill } from "react-icons/ri";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { FcCurrencyExchange } from "react-icons/fc";
import { FaCreativeCommonsZero } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { BsChatLeftQuote } from "react-icons/bs";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // Default to open
  const [isBookingHistoryOpen, setIsBookingHistoryOpen] = useState(false); // Dropdown state for Booking History
  const [isVoidOpen, setIsVoidOpen] = useState(false); // Dropdown state for Void/Refund/Change
  const [isRefundOpen, setIsRefundOpen] = useState(false); // Dropdown state for Refund
  const [isReissueOpen, setIsReissueOpen] = useState(false); // Dropdown state for Reissue
  const [isLifeStyleOpen, setIsLifeStyleOpen] = useState(false); // Dropdown state for LifeStyle

  const handleToggle = () => setIsOpen(!isOpen);
  const toggleBookingHistory = () => setIsBookingHistoryOpen(!isBookingHistoryOpen);
  const toggleVoid = () => setIsVoidOpen(!isVoidOpen);
  const toggleRefund = () => setIsRefundOpen(!isRefundOpen);
  const toggleReissue = () => setIsReissueOpen(!isReissueOpen);
  const toggleLifeStyle = () => setIsLifeStyleOpen(!isLifeStyleOpen);

  return (
    <div className="relative h-screen">
      {/* Drawer Button for Mobile */}
      <button
        className={`p-4 text-black fixed top-0 left-0 z-50 lg:hidden ${isOpen ? 'hidden' : 'block'}`}
        onClick={handleToggle}
      >
        <HiMenu size={24} />
      </button>
      {/* Drawer Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:static lg:w-64 lg:translate-x-0 flex flex-col`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 text-xl font-semibold border-b border-gray-500 flex items-center justify-between lg:hidden">
            <span>Admin Panel</span>
            <button
              className="p-2 text-black lg:hidden"
              onClick={handleToggle}
            >
              <HiX size={24} />
            </button>
          </div>
          <div className="p-4 text-xl font-semibold border-b border-gray-500 hidden lg:block">
            Admin Panel
          </div>
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              <li>
                <Link href="/search-engine" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                  <FcSearch className="mr-2 text-blue-500" />
                  Search Engine
                </Link>
              </li>
              <li>
                <button
                  className="w-full text-left flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base"
                  onClick={toggleBookingHistory}
                >
                  <FcReadingEbook className="mr-2 text-green-500" />
                  Booking History
                </button>
                <ul className={`pl-4 space-y-2 ${isBookingHistoryOpen ? 'block' : 'hidden'}`}>
                  <li>
                    <Link href="/booking-history/flight" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                      <FaPlane className="mr-2 text-orange-500" />
                      Flight
                    </Link>
                  </li>
                  <li>
                    <button
                      className="w-full text-left flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base"
                      onClick={toggleVoid}
                    >
                      <FaCreativeCommonsZero className="mr-2 text-red-500" />
                      Void
                    </button>
                    <ul className={`pl-4 space-y-2 ${isVoidOpen ? 'block' : 'hidden'}`}>
                      <li>
                        <Link href="/booking-history/void-history" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                          <BsClockHistory className="mr-2 text-yellow-500" />
                          History
                        </Link>
                      </li>
                      <li>
                        <Link href="/booking-history/void-quotation" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                          <BsChatLeftQuote className="mr-2 text-yellow-500" />
                          Quotation
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      className="w-full text-left flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base"
                      onClick={toggleRefund}
                    >
                      <RiRefund2Fill className="mr-2 text-blue-500" />
                      Refund
                    </button>
                    <ul className={`pl-4 space-y-2 ${isRefundOpen ? 'block' : 'hidden'}`}>
                      <li>
                        <Link href="/booking-history/refund-history" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                          <BsClockHistory className="mr-2 text-purple-500" />
                          History
                        </Link>
                      </li>
                      <li>
                        <Link href="/booking-history/refund-quotation" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                          <BsChatLeftQuote className="mr-2 text-purple-500" />
                          Quotation
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      className="w-full text-left flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base"
                      onClick={toggleReissue}
                    >
                      <AiOutlineIssuesClose className="mr-2 text-teal-500" />
                      Reissue
                    </button>
                    <ul className={`pl-4 space-y-2 ${isReissueOpen ? 'block' : 'hidden'}`}>
                      <li>
                        <Link href="/booking-history/reissue-history" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                          <BsClockHistory className="mr-2 text-cyan-500" />
                          History
                        </Link>
                      </li>
                      <li>
                        <Link href="/booking-history/reissue-quotation" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                          <BsChatLeftQuote className="mr-2 text-cyan-500" />
                          Quotation
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      className="w-full text-left flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base"
                      onClick={toggleLifeStyle}
                    >
                      <RiEmotionHappyLine className="mr-2 text-pink-500" />
                      LifeStyle
                    </button>
                    <ul className={`pl-4 space-y-2 ${isLifeStyleOpen ? 'block' : 'hidden'}`}>
                      <li>
                        <Link href="/booking-history/lifestyle-history" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                          <BsClockHistory className="mr-2 text-green-500" />
                          History
                        </Link>
                      </li>
                      <li>
                        <Link href="/booking-history/lifestyle-quotation" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                          <BsChatLeftQuote className="mr-2 text-green-500" />
                          Quotation
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/booking-history/hotel" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                      <FaHotel className="mr-2 text-teal-500" />
                      Hotel
                    </Link>
                  </li>
                  <li>
                    <Link href="/booking-history/visa" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                      <FaCcVisa className="mr-2 text-orange-500" />
                      Visa
                    </Link>
                  </li>
                  <li>
                    <Link href="/booking-history/insurance" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                      <GiReceiveMoney className="mr-2 text-red-500" />
                      Insurance
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/void-refund-change" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                  <FcCurrencyExchange className="mr-2 text-red-500" />
                  Void/Refund/Change
                </Link>
              </li>
              <li>
                <Link href="/partial-payment" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                  <FcMoneyTransfer className="mr-2 text-purple-500" />
                  Partial Payment
                </Link>
              </li>
              <li>
                <Link href="/transaction" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                  <FcHeatMap className="mr-2 text-teal-500" />
                  Transaction
                </Link>
              </li>
              <li>
                <Link href="/payment" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                  <HiCreditCard className="mr-2 text-blue-500" />
                  Payment
                </Link>
              </li>
              <li>
                <Link href="/bank-list" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                  <HiBriefcase className="mr-2 text-green-500" />
                  Bank List
                </Link>
              </li>
              <li>
                <Link href="/profile" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                  <HiUser className="mr-2 text-blue-500" />
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/quick-passengers" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                  <MdPeople className="mr-2 text-red-500" />
                  Quick Passengers
                </Link>
              </li>
              <li>
                <Link href="/company" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                  <HiBriefcase className="mr-2 text-blue-500" />
                  Company
                </Link>
              </li>
              <li>
                <Link href="/sign-in-sign-out" className="flex items-center p-2 text-black hover:bg-gray-200 rounded text-xs lg:text-base">
                  <HiUser className="mr-2 text-gray-500" />
                  Sign-in/Sign-Out
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
