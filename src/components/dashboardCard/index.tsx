import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend);

interface cardType {
  doughnutData?: any;
  title: string;
  sale?: number;
  customers?: number;
  className?: string;
  doughnutOptions?: any;
  lineChart?: boolean;
  count?: number;
}
const DashboardCard = ({
  doughnutData,
  title,
  sale,
  customers,
  className,
  lineChart,
  doughnutOptions,
  count,
}: cardType) => {
  return (
    <div
      className={`bg-white ${className} p-4 h-60 flex flex-col items-center justify-center`}
    >
      <h2 className='text-xl font-semibold text-left w-full'>{title}</h2>
      <div className='h-[calc(240px-50px)] w-full flex justify-center items-center'>
        {doughnutData && !lineChart ? (
          <Pie
            data={doughnutData}
            options={doughnutOptions}
            height={150}
            width={150}
          />
        ) : lineChart ? (
          <Line data={doughnutData} options={doughnutOptions} height={280} />
        ) : null}
        {sale ? (
          <div className='cardContent'>
            <p>${sale}</p>
            <FaArrowCircleUp color='green' />
          </div>
        ) : null}
        {count ? (
          <div className='cardContent'>
            <p className='text-5xl'>{count}</p>
          </div>
        ) : null}
        {customers ? (
          <div className='cardContent'>
            <p>{customers} </p>
            <FaArrowCircleDown color='red' />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DashboardCard;
