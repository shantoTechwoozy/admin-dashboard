"use client";
import { images } from "@/images/images";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import { CiYoutube } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { TfiInstagram, TfiTwitter } from "react-icons/tfi";
import Input from "../common/inputs/Input";

interface PropsTypes {
  item: string;
  href: string;
}

const Company: PropsTypes[] = [
  { item: "About", href: "/about" },
  { item: "Out Partner", href: "/partner" },
  { item: "Privacy Policy", href: "/privacypolicy" },
  { item: "T&C", href: "/t&c" },
  { item: "Blog", href: "/blog" },
  { item: "Promotions", href: "/promotions" },
  { item: "Affiliate Program", href: "/affiliateprogram" },
];

const Booking: PropsTypes[] = [
  { item: "Flights", href: "/flights" },
  { item: "Hotels", href: "/hotels" },
  { item: "Packages", href: "/packages" },
  { item: "Transportation", href: "/transportation" },
  { item: "Special Deals", href: "/specialdeals" },
];

const Services: PropsTypes[] = [
  { item: "Help", href: "/help" },
  { item: "1800-100-767-00", href: "tel:1800-100-767-00" },
  { item: "info@tripbeyond.com", href: "mailto:info@tripbeyond.com" },
];

const SocialMedia: PropsTypes[] = [
  { item: "About", href: "/about" },
  { item: "Out Partner", href: "/partner" },
  { item: "Privacy Policy", href: "/privacypolicy" },
  { item: "T&C", href: "/t&c" },
  { item: "Blog", href: "/blog" },
  { item: "Promotions", href: "/promotions" },
  { item: "Affiliate Program", href: "/affiliateprogram" },
];

const Footer = () => {
  return (
    <footer className="mt-auto bg-secondary text-orange-400">
      <div className="grid grid-cols-1 gap-8 p-6 sm:p-10 lg:grid-cols-6 lg:gap-10 lg:p-12">
        <div className="flex justify-center lg:justify-start">
          <a href="/" className="block">
            <span className="sr-only">Home</span>
            <Image src={images.logo} height={60} width={180} alt="logo" />
          </a>
        </div>
        <div>
          <p className="mt-3 font-bold text-orange-400">Company</p>
          <ul className="mt-4 space-y-2 text-sm sm:space-y-4">
            {Company.map((company) => (
              <li key={nanoid()}>
                <a
                  href={company.href}
                  className="text-gray-3 transition hover:opacity-75"
                >
                  {company.item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mt-3 font-bold text-orange-400">Booking</p>
          <ul className="mt-4 space-y-2 text-sm sm:space-y-4">
            {Booking.map((booking) => (
              <li key={nanoid()}>
                <Link
                  href={booking.href}
                  className="text-gray-3 transition hover:opacity-75"
                >
                  {booking.item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mt-3 font-bold text-orange-400">Services</p>
          <div className="mt-4 flex flex-col space-y-2 text-sm sm:space-y-4">
            {Services.map((service) => (
              <Link
                key={nanoid()}
                href={service.href}
                className="text-gray-3 transition hover:opacity-75"
              >
                {service.item}
              </Link>
            ))}
            <li>
              <Link
                href="#"
                className="text-gray-3 transition hover:opacity-75"
              >
                We accept
                <Image
                  src={images.payment}
                  alt="alt"
                  width={400}
                  height={300}
                />
              </Link>
            </li>
          </div>
        </div>
        <div>
          <p className="mt-3 font-bold text-orange-400">Connect with Us</p>
          <ul className="mt-4 space-y-2 text-sm sm:space-y-4">
            <li>
              <Link
                href="#"
                className="text-gray-3 transition hover:opacity-75"
              >
                Social Media
              </Link>
            </li>
            <li className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="text-gray-3 transition hover:opacity-75"
                aria-label="Facebook"
              >
                <FiFacebook className="h-7 w-7 text-gray-3 transition hover:opacity-75" />
              </Link>
              <Link
                href="#"
                className="text-gray-3 transition hover:opacity-75"
                aria-label="Twitter"
              >
                <TfiTwitter className="h-7 w-7 text-gray-3 transition hover:opacity-75" />
              </Link>
              <Link
                href="#"
                className="text-gray-3 transition hover:opacity-75"
                aria-label="Instagram"
              >
                <TfiInstagram className="h-7 w-7 text-gray-3 transition hover:opacity-75" />
              </Link>
              <Link
                href="#"
                className="text-gray-3 transition hover:opacity-75"
                aria-label="LinkedIn"
              >
                <SlSocialLinkedin className="h-7 w-7 text-gray-3 transition hover:opacity-75" />
              </Link>
              <Link
                href="#"
                className="text-gray-3 transition hover:opacity-75"
                aria-label="YouTube"
              >
                <CiYoutube className="h-7 w-7 text-gray-3 transition hover:opacity-75" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-3 transition hover:opacity-75"
              >
                Newsletter
              </Link>
              <div className="mt-2 flex flex-col sm:flex-row">
                <Input
                  type="email"
                  value=""
                  className="w-full focus:outline-none sm:w-auto sm:flex-1"
                  placeHolder="Email ID"
                  onChange={() => {}}
                />
                <button className="mt-2 rounded-full bg-[#FF9C00] px-3 py-2 font-bold text-black hover:bg-orange-500/90 active:border-b-0 sm:ml-2 sm:mt-0 sm:px-4">
                  Subscribe
                </button>
              </div>
            </li>
            <li className="w-full sm:w-[400px]">
              <Link
                href="mailto:info@tripbeyond.com"
                className="text-gray-3 transition hover:opacity-75"
              >
                <Image
                  src={images.sponsor}
                  alt="alt"
                  width={400}
                  height={300}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-secondary py-4 text-center text-xs">
        <p>&copy; 2023 TripBeyond. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
