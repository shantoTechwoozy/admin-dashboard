import Image from "next/image";
import React,{ MouseEventHandler } from "react";

interface PropsTypes {
  isRotating: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SwapImg: React.FC<PropsTypes> = ({ isRotating, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded- absolute right-0 z-9 ml-auto flex size-11 items-center justify-center rounded-full border border-slate-500 bg-white sm:relative "
    >
      <Image
        src="/se/swap.png"
        width={50}
        height={50}
        alt="Swap Icon"
        // className={cn('h-6 w-6 transition-transform duration-1000',)}
        className={`h-6 w-6 ${isRotating ? "rotate-360" : ""} transition-transform duration-1000`}
      />
    </button>
  );
};

export default SwapImg;
