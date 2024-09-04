import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { TfiTwitter } from "react-icons/tfi";
import { TfiInstagram } from "react-icons/tfi";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiYoutube } from "react-icons/ci";
import { images } from "@/images/images";
import Input from "../common/inputs/Input";
import Link from "next/link";


interface _propsTypes {
    item: string;
    href?: string;
}

const SocialIcons: _propsTypes[] = [
    { item: "About", href: "/about" },
    { item: "Out Partner", href: "/partner" },
    { item: "Privacy Policy", href: "/privacypolicy" },
    { item: "T&C", href: "/t&c" },
    { item: "Blog", href: "/blog" },
    { item: "Promotions", href: "/promotions" },
    { item: "Affiliate Program", href: "/affiliateprogram" }
]





const SocialMedia = () => {
    return (
        <div>
            <ul className="mt-4 space-y-2 sm:space-y-4 text-sm">
                <li>
                    <Link href="#" className="text-gray-3 transition hover:opacity-75">
                        Social Media
                    </Link>
                </li>
                <li className="flex flex-wrap gap-4">
                    <Link
                        href="#"
                        className="text-gray-3 transition hover:opacity-75"
                        aria-label="Facebook"
                    >
                        <FiFacebook className="text-gray-3 transition hover:opacity-75 h-7 w-7" />
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-3 transition hover:opacity-75"
                        aria-label="Twitter"
                    >
                        <TfiTwitter className="text-gray-3 transition hover:opacity-75 h-7 w-7" />
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-3 transition hover:opacity-75"
                        aria-label="Instagram"
                    >
                        <TfiInstagram className="text-gray-3 transition hover:opacity-75 h-7 w-7" />
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-3 transition hover:opacity-75"
                        aria-label="LinkedIn"
                    >
                        <SlSocialLinkedin className="text-gray-3 transition hover:opacity-75 h-7 w-7" />
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-3 transition hover:opacity-75"
                        aria-label="YouTube"
                    >
                        <CiYoutube className="text-gray-3 transition hover:opacity-75 h-7 w-7" />
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-gray-3 transition hover:opacity-75">
                        Newsletter
                    </Link>
                    <div className="flex flex-col sm:flex-row mt-2">
                        <Input
                            type="email"
                            value="email"
                            className="w-full sm:w-auto sm:flex-1"
                            placeHolder="Email ID"
                            onChange={() => { }}
                        />
                        <button
                            className="mt-2 sm:mt-0 sm:ml-2 rounded-full bg-[#FF9C00] hover:bg-orange-500/90 active:border-b-0 text-black px-3 sm:px-4 py-2"

                        >
                            Subscribe
                        </button>
                    </div>
                </li>
                <li className="w-full sm:w-[400px]">
                    <Link
                        href="mailto:info@tripbeyond.com"
                        className="text-gray-3 transition hover:opacity-75"
                    >
                        <Image src={images.sponsor} alt="alt" width={400} height={300} />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SocialMedia
