import React from "react";
import { notificationsData } from "../../constants";
import NotificationCard from "../notificationCard";
interface props {
  className?: string;
}
const Notifications = ({ className }: props) => {
  return (
    <div className={`${className} p-4 h-60 bg-white overflow-y-auto`}>
      <h2 className='text-xl font-semibold text-left w-full mb-2'>Notifications</h2>
      <div>
        {notificationsData.map((item, index: number) => (
          <NotificationCard
            title={item.title}
            description={item.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
