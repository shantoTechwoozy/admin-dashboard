import cn from "@/utils/cn";
import { Input, Label } from "keep-react";
import React from "react";

type KeepInputProps = React.ComponentProps<typeof Input> & {
  type?: string;
  className?: string;
  label?: string;
};

const KeepInput: React.FC<KeepInputProps> = ({
  type = "text",
  className,
  label,
  ...rest
}) => {
  if (label) {
    return (
      <fieldset className="space-y-1">
        <Label htmlFor="name">Enter Name</Label>
        <Input
          type={type}
          {...rest}
          className={cn(
            "border border-metal-300 text-base placeholder:text-metal-300",
            className,
          )}
        />
      </fieldset>
    );
  } else {
    return (
      <Input
        type={type}
        {...rest}
        className={cn(
          "border border-metal-300 text-base placeholder:text-metal-300",
          className,
        )}
      />
    );
  }
};

export default KeepInput;
