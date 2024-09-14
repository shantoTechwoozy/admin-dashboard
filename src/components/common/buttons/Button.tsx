import cn from "@/utils/cn";
import React from "react";
import BtnLoader from "../Loader/BtnLoader";

interface PropsTypes {
  text: string;
  onClick: (e: any) => void;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}
const Button: React.FC<PropsTypes> = ({
  text,
  onClick,
  prevIcon,
  nextIcon,
  className,
  isLoading,
}) => {
  return (
    <button
      className={cn(
        "flex flex-1 items-center justify-center gap-1 rounded-md bg-primary px-3 py-2 text-sm capitalize text-white",
        className,
      )}
      onClick={onClick}
    >
      {isLoading && <BtnLoader />}
      {prevIcon && <span>{prevIcon}</span>}
      <span className="text-base">{text}</span>
      {nextIcon && <span>{nextIcon}</span>}
    </button>
  );
};

export default Button;
