import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationDetails from "../Pages/Donation/DonationDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/donations/:id",
        element: <DonationDetails />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/stattistic",
        element: <Statistics />,
      },
    ],
  },
]);

export default Router;
