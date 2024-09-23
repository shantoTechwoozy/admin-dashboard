import cn from "@/utils/cn";
import React from "react";
import BtnLoader from "../Loader/BtnLoader";

interface PropsTypes {
  text: string;
  onClick?: (e: any) => void;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  className?: string;
  parentClassName?: string;
  isLoading?: boolean;
}
const Button: React.FC<PropsTypes> = ({
  text,
  onClick,
  prevIcon,
  nextIcon,
  className,
  parentClassName,
  isLoading,
}) => {
  return (
    <div className={cn("flex h-full items-center", parentClassName)}>
      <button
        className={cn(
          "flex w-full flex-1 items-center justify-center gap-1 rounded-md bg-primary px-5 py-2 text-sm capitalize text-white",
          className,
        )}
        onClick={onClick}
      >
        {isLoading && <BtnLoader />}
        {prevIcon && <span>{prevIcon}</span>}
        <span className="text-base">{text}</span>
        {nextIcon && <span>{nextIcon}</span>}
      </button>
    </div>
  );
};

export default Button;
