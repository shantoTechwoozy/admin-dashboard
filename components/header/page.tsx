import React from "react";
const Header: React.FC = () => {
    return (
      <header className="bg-white shadow-md p-4 border-b border-gray-200">
        <div className="flex items-center justify-end">
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 lg:text-lg hover:text-gray-900">Notifications</button>
            <button className="text-gray-600 lg:text-lg hover:text-gray-900">Profile</button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  