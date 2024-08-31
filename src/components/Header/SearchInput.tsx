import { IconTopBar } from "@/icons";
import React from "react";

interface _PropsTypes {
  value?: string;
  onChange: (e: any) => void;
}

const SearchInput: React.FC<_PropsTypes> = ({ value, onChange }) => {
  return (
    <div className="relative hidden sm:block">
      <button className="absolute left-0 top-1/2 -translate-y-1/2">
        <IconTopBar.search className="text-xl" />
      </button>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type to search..."
        className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
      />
    </div>
  );
};

export default SearchInput;
