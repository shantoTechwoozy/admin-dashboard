import React from "react";

interface FooterColumnProps {
    title: string;
    children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => (
    <div>
        <p className="font-bold text-orange-400 mt-3">{title}</p>
        <ul className="mt-4 space-y-2 sm:space-y-4 text-sm">{children}</ul>
    </div>
);

export default FooterColumn;
