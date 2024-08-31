import Link from "next/link";
import React from "react";
import NotificationDetailsItem from "./NotificationDetailsItem";

const NotificationDetails = () => {
  return (
    <div
      className={`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80`}
    >
      <div className="px-4.5 py-3">
        <h5 className="text-sm font-medium text-bodydark2">Notification</h5>
      </div>

      <div className="flex h-auto flex-col overflow-y-auto">
        <NotificationDetailsItem
          commentUrl=""
          comment="Edit your information in a swipeSint occeaecar cupidatat non prodient, sunt in culpa qui officia deserunt mollit anim."
          date="04 jan, 2025"
        />
        <NotificationDetailsItem
          commentUrl=""
          comment="Edit your information in a swipeSint occeaecar cupidatat non prodient, sunt in culpa qui officia deserunt mollit anim."
          date="04 jan, 2025"
        />
        <NotificationDetailsItem
          commentUrl=""
          comment="Edit your information in a swipeSint occeaecar cupidatat non prodient, sunt in culpa qui officia deserunt mollit anim."
          date="04 jan, 2025"
        />
      </div>
    </div>
  );
};

export default NotificationDetails;
