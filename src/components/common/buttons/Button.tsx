import cn from "@/utils/cn";
import React from "react";
import BtnLoader from "../Loader/BtnLoader";

interface PropsTypes {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
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
  type,
}) => {
  return (
    <div className={cn("flex h-full items-center", parentClassName)}>
      <button
        type={type || "button"}
        className={cn(
          "flex w-full flex-1 items-center justify-center gap-1 rounded-md bg-primary px-5 py-2 text-sm capitalize text-white",
          className,
          isLoading ? "cursor-not-allowed opacity-50" : "",
        )}
        onClick={!isLoading ? onClick : undefined}
        disabled={isLoading}
      >
        {isLoading && <BtnLoader />}
        {prevIcon && <span>{prevIcon}</span>}
        <span>{text}</span>
        {nextIcon && <span>{nextIcon}</span>}
      </button>
    </div>
  );
};

export default Button;
