import React from "react";

interface _PropsTypes {
  onClick: () => void;
  children: React.ReactNode;
}

const IconHolderBtn: React.FC<_PropsTypes> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
    >
      {children}
    </button>
  );
};

export default IconHolderBtn;
