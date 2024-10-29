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
import { recentInvoiceData } from "../../constants";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface props {
  title: string;
}
const RecentlyPaidInvoices = ({ title }: props) => {
  return (
    <div>
      <div className='flex justify-between items-center pb-3'>
        <h2 className='text-xl text-textPrimary'>{title}</h2>
      </div>
      <div className='bg-white'>
        <div>
          <div className='flex justify-between items-center bg-sky-900 p-4 text-white'>
            <p className='w-4/12'>Name</p>
            <p className='w-4/12'>Time</p>
            <p className='w-4/12'>Amount</p>
          </div>
          {recentInvoiceData.map((item, index) => {
            return (
              <div
                key={item.invoiceName + index}
                className='flex items-center justify-between p-4'
              >
                <p className='w-4/12'>{item.invoiceName}</p>
                <p className='w-4/12'>{item.time}</p>
                <p className='w-4/12'>{item.amount}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentlyPaidInvoices;
