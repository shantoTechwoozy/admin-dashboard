"use client"
import React from 'react';
import { FaBars } from 'react-icons/fa';

type MenuButtonProps = {
  toggleMenu: () => void; // Define the type for the toggleMenu function
};

const MenuButton: React.FC<MenuButtonProps> = ({ toggleMenu }) => {
  return (
    <button
      type="button"
      onClick={toggleMenu}
      className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    >
      <span className="sr-only">Open main menu</span>
      <FaBars aria-hidden="true" className="h-6 w-6" />
    </button>
  );
};

export default MenuButton;
