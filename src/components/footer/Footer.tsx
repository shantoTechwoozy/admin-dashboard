import React from "react";

import FooterLogo from "./FooterLogo";
import FooterColumn from "./FooterColumn";
import FooterLink from "./FooterLink";
import FooterSocialIcons from "./FooterSocialIcons";
import FooterNewsletter from "./FooterNewsletter";
import FooterSponsor from "./FooterSponsor";
import Image from "next/image";
import { images } from "@/images/images";

const Footer = () => (
    <footer className="bg-[#1e2755] text-orange-400">
        <div className="grid grid-cols-1 gap-8 p-6 sm:p-10 lg:grid-cols-6 lg:gap-10 lg:p-12">
            <FooterLogo />

            <FooterColumn title="Company">
                <FooterLink href="#" label="About" />
                <FooterLink href="#" label="Our Partner" />
                <FooterLink href="#" label="Privacy Policy" />
                <FooterLink href="#" label="T&C" />
                <FooterLink href="#" label="Blog" />
                <FooterLink href="#" label="Promotions" />
                <FooterLink href="#" label="Affiliate Program" />
            </FooterColumn>

            <FooterColumn title="Booking">
                <FooterLink href="#" label="Flights" />
                <FooterLink href="#" label="Hotels" />
                <FooterLink href="#" label="Packages" />
                <FooterLink href="#" label="Transportation" />
                <FooterLink href="#" label="Special Deals" />
            </FooterColumn>

            <FooterColumn title="Services">
                <FooterLink href="#" label="Help" />
                <FooterLink href="tel:180010076700" label="1800-100-767-00" />
                <FooterLink href="mailto:info@tripbeyond.com" label="info@tripbeyond.com" />
                <li>
                    <a href="#" className="text-gray-3 transition hover:opacity-75">
                        We accept :
                        <Image src={images.payment} alt="alt" width={150} height={100} />
                    </a>
                </li>
            </FooterColumn>

            <FooterColumn title="Connect with Us">
                <FooterLink href="#" label="Social Media" />
                <FooterSocialIcons />
                <FooterNewsletter />
                <FooterSponsor />
            </FooterColumn>
        </div>
        <div className="bg-[#1e2755] py-4 text-center text-xs">
            <p>&copy; 2023 TripBeyond. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;
