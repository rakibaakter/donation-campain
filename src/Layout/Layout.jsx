import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-5">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
