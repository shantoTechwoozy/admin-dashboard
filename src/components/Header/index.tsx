import DarkModeSwitcher from "./DarkModeSwitcher";
import MobileMenuIcon from "./MobileMenuIcon";
import Notifications from "./notifications";
import Profile from "./profile/Profile";
import SearchInput from "./SearchInput";

interface _PropsTypes {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<_PropsTypes> = ({ setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-999 flex w-full flex-grow items-center justify-between gap-5 bg-white px-4 py-4 shadow-2 drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none md:px-6 2xl:px-11">
      <MobileMenuIcon setIsSidebarOpen={setSidebarOpen} />
      <SearchInput value="Type to search..." onChange={() => {}} />

      <DarkModeSwitcher />

      <Notifications />

      <Profile
        username="Shanto"
        designation="Sr. software engineer"
        avatarUrl="/images/user/user-01.png"
      />
    </header>
  );
};

export default Header;
