import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <Logo />
      <Menu />
    </nav>
  );
};

export default Navbar;
