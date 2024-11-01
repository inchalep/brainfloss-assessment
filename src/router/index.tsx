import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import LoginRegister from "../pages/LoginRegister";
import Layout from "../components/layout";
import UserManagement from "../pages/users";
import Invoices from "../pages/invoices";
import NotFound from "../pages/notFound/page";
import ProtectedRoute from "../components/protectedRoute";
import PublicdRoute from "../components/publicRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/user-management",
        element: <UserManagement />,
      },
      {
        path: "/invoices",
        element: <Invoices />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicdRoute>
        <LoginRegister />
      </PublicdRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicdRoute>
        <LoginRegister />
      </PublicdRoute>
    ),
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
