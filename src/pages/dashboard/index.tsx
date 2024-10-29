import AdminDashboard from "../../components/adminDashboard";
import UserDashboard from "../../components/userDashboard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Dashboard = () => {
  const state = useSelector((state: RootState) => state.user);
  return (
    <div>
      {state.data?.role.toLowerCase() === "admin" ? (
        <AdminDashboard />
      ) : (
        <UserDashboard />
      )}
    </div>
  );
};

export default Dashboard;
