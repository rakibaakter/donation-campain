import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";

const Layout = () => {
  const loc = useLocation();

  useEffect(() => {
    document.title = `Donation Campaign ${loc.pathname.replace("/", "-")}`;
  }, [loc.pathname]);

  return (
    <div className="max-w-7xl mx-auto mb-20 px-2 md:px-5">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
