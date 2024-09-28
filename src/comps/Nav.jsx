import { NavLink } from "./NavLink";

export const Nav = () => {
  const navLinks = ["home", "work", "about", "contact"];

  return (
    <nav className="p-header__nav p-nav">
      <ul className="p-nav__lists">
        {navLinks.map((navLink, index) => {
            return <NavLink navLink={navLink} key={index}/>
        })}
      </ul>
    </nav>
  );
};
