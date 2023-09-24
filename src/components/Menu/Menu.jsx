import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="flex gap-10 text-xl">
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/stattistic"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          Statistics
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
