import clsx from "clsx";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && "activeNavLink");
  };
  return (
    <header>
      <nav className="flex gap-12  bg-[#629154] p-[25px]">
        <NavLink className={buildLinkClass} to="/">
          HOME
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies">
          MOVIES
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
