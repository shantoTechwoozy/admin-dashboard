import cn from "@/utils/cn";
import React from "react";

interface _PropsTypes {
  isNotifying: boolean;
}

const Notifier: React.FC<_PropsTypes> = ({ isNotifying }) => {
  return (
    <span
      className={cn(
        "absolute -right-0.5 -top-0.5 z-1 inline h-2 w-2 rounded-full bg-meta-1",
        {
          hidden: !isNotifying,
        },
      )}
    >
      <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
    </span>
  );
};

export default Notifier;
