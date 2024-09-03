import Image from "next/image";
import { images } from "@/images/images";
import React from "react";

const FooterSponsor = () => (
    <li className="w-full sm:w-[400px]">
        <a href="mailto:info@tripbeyond.com" className="text-gray-3 transition hover:opacity-75">
            <Image src={images.sponsor} alt="alt" width={400} height={260} />
        </a>
    </li>
);

export default FooterSponsor;
