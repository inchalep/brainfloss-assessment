import { useSelector } from "react-redux";
import DashboardCard from "../dashboardCard";
import { RootState } from "../../store";
import Input from "../input";
import React, { useState } from "react";
import Notifications from "../notifications";
import RecentlyPaidInvoices from "../paidInvoices";

const UserDashboard = () => {
  const [searchVal, setSearchVal] = useState("");
  const state = useSelector((state: RootState) => state.user);
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Projected Sales",
        data: [50, 40, 20, 20, 50, 60, 30, 48],
        borderColor: "red",
        backgroundColor: "red",
        tension: 0.4,
      },
      {
        label: "Completed Sales",
        data: [2, 5, 50, 20, 35, 60, 85],
        borderColor: "blue",
        backgroundColor: "blue",
        tension: 0.4,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };
  return (
    <div className='wrapper p-6'>
      <div className='pt-2 pb-6 flex items-center justify-between'>
        <h2 className='text-4xl text-textPrimary'>
          Hey {state.data?.username}
        </h2>
        <div className='w-72'>
          <Input
            name='searchVal'
            type='text'
            placeholder='Search'
            value={searchVal}
            searchInput={true}
            onChange={inputHandler}
          />
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-y-8 sm:gap-x-8'>
        <DashboardCard
          doughnutData={data}
          doughnutOptions={options}
          lineChart={true}
          title='Sales'
          className='w-full sm:w-7/12'
        />
        <Notifications className='w-full sm:w-5/12' />
      </div>
      <div className='p-4 my-8 border'>
        <RecentlyPaidInvoices title='Recently Paid Invoices'/>
      </div>
    </div>
  );
};

export default UserDashboard;
