import { IconFooter } from "@/icons";
import Link from "next/link";
import React from "react";

const FooterSocialIcons = () => (
    <div className="flex flex-wrap gap-4">
        <Link href="#" aria-label="Facebook">
            <IconFooter.facebook className="text-gray-3 transition hover:opacity-75 h-7 w-7" />
        </Link>
        <Link href="#" aria-label="Twitter">
            <IconFooter.twitter className="text-gray-3 transition hover:opacity-75 h-7 w-7" />
        </Link>
        <Link href="#" aria-label="Instagram">
            <IconFooter.instagram className="text-gray-3 transition hover:opacity-75 h-7 w-7" />
        </Link>
        <Link href="#" aria-label="LinkedIn">
            <IconFooter.linkedin className="text-gray-3 transition hover:opacity-75 h-7 w-7" />
        </Link>
        <Link href="#" aria-label="YouTube">
            <IconFooter.youtube className="text-gray-3 transition hover:opacity-75 h-7 w-7" />
        </Link>
    </div>
);

export default FooterSocialIcons;
