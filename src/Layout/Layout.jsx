import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
