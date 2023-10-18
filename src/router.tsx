import { createBrowserRouter } from "react-router-dom";
import { RoutePaths } from "./routePaths";
import { Home } from "./pages/home/Home";
import { Services } from "./pages/services/Services";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/signup/Signup";
import { Contact } from "./pages/contact/Contact";
import { Technicians } from "./pages/technicians/Technicians";
import { TechnicianDetails } from "./pages/technicians/technician-details/TechnicianDetails";
import { Dashboard } from "./pages/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: RoutePaths.BASE,
    element: <Home/>,
    children: [
      {
        path: RoutePaths.BASE,
        element: <Dashboard/>,
      },
      // {
      //     path: RoutePaths.DASHBOARD,
      //     element: <Dashboard />,
      // },
      {
        path: RoutePaths.SERVICES,
        element: <Services/>,
      },
      {
        path: RoutePaths.CONTACT,
        element: <Contact/>,
      },
      {
        path: RoutePaths.TECHNICIANS,
        element: <Technicians/>,
      },
      {
        path: `${RoutePaths.TECHNICIANS}/:technicianId`,
        element: <TechnicianDetails/>,
      },
      {
        path: RoutePaths.ANY,
        element: <Dashboard/>,
      },
    ]
  },
  {
    path: RoutePaths.LOGIN,
    element: <Login/>,
  },
  {
    path: RoutePaths.SIGNUP,
    element: <Signup/>,
  },
]);