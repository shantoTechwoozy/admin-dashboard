import cn from "@/utils/cn";
import React from "react";

interface PropsTypes {
  label: string;
  required?: boolean;
  placeholder: string;
  value: string;
  onChange: (arg: any) => void;
  parentClass?: string;
  labelClass?: string;
  inputClass?: string;
}

const FlightPlaceInput: React.FC<PropsTypes> = ({
  label,
  required,
  placeholder,
  value,
  onChange,
  parentClass,
  labelClass,
  inputClass,
}) => {
  return (
    <div className={cn("flex h-12 flex-1 flex-col", parentClass)}>
      <label
        htmlFor="Return"
        className={cn("flex capitalize text-primary  ", labelClass)}
      >
        <span>{label}</span>
        {required && <span className="text-red">*</span>}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className={cn("px-1 font-medium text-black", inputClass)}
        onChange={onChange}
      />
    </div>
  );
};

export default FlightPlaceInput;
