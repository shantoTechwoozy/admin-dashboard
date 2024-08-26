import cn from "@/utils/cn";
import React from "react";

interface PropeTypes {
  label: string;
  type: string;
  className?: string;
  value: string;
  onChange: (e: any) => void;
}

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  className,
}: PropeTypes) => {
  return (
    <div className="flex-1">
      <label className="mb-2 block text-sm font-medium text-black">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full rounded-full border border-slate-300 px-3 py-2 shadow-md transition-shadow hover:shadow-lg",
          className,
        )}
      />
    </div>
  );
};

export default Input;
