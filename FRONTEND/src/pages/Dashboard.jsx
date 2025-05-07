import CustomerDashboard from "../components/CustomerDashboard";
import AdminDashboard from "../components/AdminDashboard";
import ManagerDashboard from "../components/ManagerDashboard";

export default function Dashboard({ role }) {
  return (
    <div>
      {role === "customer" && <CustomerDashboard />}
      {role === "admin" && <AdminDashboard />}
      {role === "manager" && <ManagerDashboard />}
    </div>
  );
}
