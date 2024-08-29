import { IconTopBar } from "@/icons";
import DetailsItem from "./DetailsItem";

const Details = () => {
  return (
    <div
      className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
    >
      <div className="flex flex-col border-b border-stroke py-5 dark:border-strokedark">
        <DetailsItem itemName="my profile" itemUrl="/profile">
          <IconTopBar.myProfile />
        </DetailsItem>

        <DetailsItem itemName="account settings" itemUrl="/settings">
          <IconTopBar.accountSettings />
        </DetailsItem>

        <DetailsItem itemName="logout" onClick={() => {}}>
          <IconTopBar.logout />
        </DetailsItem>
      </div>
    </div>
  );
};

export default Details;
