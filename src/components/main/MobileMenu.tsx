"use client"
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Logo from '../common/Logo';
import MenuButton from './MenuButton';
import Link from 'next/link';
function MobileMenu() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <MenuButton toggleMenu={toggleMenu} />
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-white p-6">
                    <div className="flex items-center justify-between">
                        <Logo isDark={false} />
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <FaTimes aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="flex flex-col space-y-2 py-6">
                                <Link
                                    className="flex items-center text-md p-2 lg:text-white font-thin leading-6 text-gray-900"
                                    href="/signup">
                                    Sign up
                                </Link>
                                <Link href="/signin" className="w-32 bg-orange-500 text-center hover:bg-orange-700 py-3 px-3 rounded-full text-md font-semibold leading-6 text-white">
                                    Sign in <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MobileMenu;
