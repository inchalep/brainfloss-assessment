import React, { useMemo } from "react";
import { FaBell } from "react-icons/fa";
interface props {
  title: string;
  description: string;
}

const NotificationCard = ({ title, description }: props) => {
  const truncateDesc = useMemo(() => {
    const length = 60;
    if (description.length <= length) return description;
    return description.slice(0, length) + "...";
  }, []);
  return (
    <div className='flex items-baseline gap-x-3 p-2 shadow-md rounded-md bg-red-200 mb-3'>
      <div>
        <FaBell />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{truncateDesc}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
