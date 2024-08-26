import React from "react";
import searchIcon from "../../../../public/images/icon/searchIcon.svg";
import Image from "next/image";

interface PropsTypes {
  onClick: () => void;
}

const SearchButton = ({ onClick }: PropsTypes) => {
  return (
    <button className="block rounded-md bg-blue-600 px-6 py-3 text-white shadow-lg transition-shadow hover:bg-blue-700 active:bg-blue-800">
      <Image src={searchIcon} alt="search" />
    </button>
  );
};

export default SearchButton;
