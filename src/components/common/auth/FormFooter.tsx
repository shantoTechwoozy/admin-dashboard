import Link from 'next/link'
import React from 'react'
interface PropsTypes {
    name?: string;
    registration?: string;
    href: string;
    forgetTitle?: string;
}
const FormFooter: React.FC<PropsTypes> = ({ name, registration, href, forgetTitle }) => {
    return (
        <div className="mt-4 flex  text-sm font-bold text-gray-600 dark:text-gray-400 space-x-30">
            {name}
            <Link href={href} className="hover:underline font-normal ml-2">
                {registration}
            </Link>
            {forgetTitle && <Link href={forgetTitle?.split(" ").join("-").toLowerCase()} className="hover:underline ml-auto">
                <span>{forgetTitle}?</span>
            </Link>}
        </div>
    )
}

export default FormFooter
