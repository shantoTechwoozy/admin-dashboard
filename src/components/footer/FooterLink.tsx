interface FooterLinkProps {
    href: string;
    label: string;
}

const FooterLink = ({ href, label }: FooterLinkProps) => (
    <li>
        <a href={href} className="text-gray-3 transition hover:opacity-75">
            {label}
        </a>
    </li>
);

export default FooterLink;
