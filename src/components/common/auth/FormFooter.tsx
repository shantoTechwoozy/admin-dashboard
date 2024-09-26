import Link from "next/link";
import React from "react";

interface PropsTypes {
  name?: string;
  registration?: string;
  href: string;
  forgetTitle?: string;
}

const FormFooter: React.FC<PropsTypes> = ({
  name,
  registration,
  href,
  forgetTitle,
}) => {
  return (
    <div className="space-x-30 mt-4 flex text-sm font-bold text-gray-600 dark:text-gray-400">
      {name}
      <Link href={href} className="ml-2 font-normal hover:underline">
        {registration}
      </Link>
      {forgetTitle && (
        <Link
          href={forgetTitle?.split(" ").join("-").toLowerCase()}
          className="ml-auto hover:underline"
        >
          <span>{forgetTitle}?</span>
        </Link>
      )}
    </div>
  );
};

export default FormFooter;
