import { useState } from "react";
import Input from "../../components/input";
import DashboardCard from "../../components/dashboardCard";
import RecentlyPaidInvoices from "../../components/paidInvoices";
import { FaPlus } from "react-icons/fa";

const Invoices = () => {
  const [searchVal, setSearchVal] = useState("");
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };
  return (
    <div className='wrapper p-6'>
      <div className='pt-2 pb-6 flex items-start justify-between'>
        <h2 className='text-4xl text-textPrimary'>Invoices</h2>
        <div className='w-72'>
          <Input
            name='searchVal'
            type='text'
            placeholder='Search'
            value={searchVal}
            searchInput={true}
            onChange={inputHandler}
          />
          <button className='flex items-center text-white gap-x-1 bg-darkYelow px-3 mt-4'>
            <FaPlus color='green' /> <span>Add Invoice</span>
          </button>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-y-8 sm:gap-x-8'>
        <DashboardCard
          title='Paid Invoices'
          className='w-full sm:w-4/12'
          count={50}
        />
        <DashboardCard
          title='Due Invoices'
          className='w-full sm:w-4/12'
          count={13}
        />
        <DashboardCard
          title='Total Invoices'
          className='w-full sm:w-4/12'
          count={63}
        />
      </div>
      <div className='p-4 my-8 border'>
        <RecentlyPaidInvoices title='Invoices' />
      </div>
    </div>
  );
};

export default Invoices;
