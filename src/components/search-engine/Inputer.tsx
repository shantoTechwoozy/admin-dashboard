import React from "react";

interface inputTypes {
  shortName: string;
  name: string;
  fullName: string;
}

interface PropeTypes {
  label: string;
  input: inputTypes;
}

const Inputer = ({ label, input }: PropeTypes) => {
  return (
    <div className="flex-1 w-full">
      <h1 className="mb-2 hidden text-sm font-medium text-black sm:block">
        {label}
      </h1>
      <div className="relative flex w-full items-center gap-2 rounded-full border border-black px-2 py-1">
        <span className="absolute -top-2 left-[50%] z-10 flex w-20 -translate-x-[50%] justify-center rounded-full bg-slate-300 px-3 text-xs capitalize sm:hidden">
          {label}
        </span>
        {/* left text  */}
        <h1 className="text-lg font-bold uppercase">{input.shortName}</h1>

        {/* border  */}
        <div className="h-[30px] w-[1px] bg-black"> </div>

        {/* right content  */}
        <div className="flex flex-col justify-center">
          <p className="text-sm capitalize">{input.name}</p>
          <span className="text-xs capitalize">{input.fullName}</span>
        </div>
      </div>
    </div>
  );
};

export default Inputer;
