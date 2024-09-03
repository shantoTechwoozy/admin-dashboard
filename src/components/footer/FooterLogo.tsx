import Logo from "../common/Logo";
import React from "react";

const FooterLogo = () => (
    <div className="flex justify-center lg:justify-start">
        <a href="/" className="block">
            <span className="sr-only">Home</span>
            <Logo isDark={false} />
        </a>
    </div>
);

export default FooterLogo;
