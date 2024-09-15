import cn from "@/utils/cn";
import React from "react";

interface PropsTypes {
    label: string;
    required?: boolean;
    labelClass?: string;

}

const InputLabel: React.FC<PropsTypes> = ({
    label,
    required,
    labelClass,

}) => {
    return (
        <label
            htmlFor="Return"
            className={cn("flex capitalize text-primary  ", labelClass)}
        >
            <span>{label}</span>
            {required && <span className="text-red">*</span>}
        </label>
    )
}

export default InputLabel
