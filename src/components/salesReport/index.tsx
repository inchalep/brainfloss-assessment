import React from "react";
import { FaDownload } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesReport = () => {
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
  return (
    <div>
      <div className='flex justify-between items-center pb-3'>
        <h2 className='text-xl text-textPrimary'>Sales Report</h2>
        <button className='flex items-center gap-x-1 bg-darkYelow px-3'>
          <FaDownload /> <span>PDF</span>
        </button>
      </div>
      <div className='bg-white'>
        <Line data={data} options={options} height={280} />
      </div>
    </div>
  );
};

export default SalesReport;
