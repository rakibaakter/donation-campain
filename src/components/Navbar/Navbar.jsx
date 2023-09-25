import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row gap-6 justify-between items-center py-4">
      <Logo />
      <Menu />
    </nav>
  );
};

export default Navbar;
