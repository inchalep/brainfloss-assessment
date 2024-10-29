import DashboardCard from "../dashboardCard";
import SalesReport from "../salesReport";

const AdminDashboard = () => {
  const data: any = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: ["tan", "blue", "green"],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return (
    <div className='wrapper p-6'>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-y-8 sm:gap-x-8'>
        <DashboardCard
          doughnutData={data}
          doughnutOptions={options}
          title='User Distribution'
          className='w-full sm:w-4/12'
        />
        <DashboardCard
          sale={1500}
          title='Todays Sale'
          className='w-full sm:w-4/12'
        />
        <DashboardCard
          customers={1200}
          title='Total Customers'
          className='w-full sm:w-4/12'
        />
      </div>
      <div className='p-4 my-8 border'>
        <SalesReport />
      </div>
    </div>
  );
};

export default AdminDashboard;
