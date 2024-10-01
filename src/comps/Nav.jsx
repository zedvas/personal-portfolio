import { NavLinkComp } from "./NavLinkComp";
import '../styles/nav.scss';

export const Nav = () => {
  const navLinks = ["home", "about", "work", "contact"];

  return (
    <nav className="p-header__nav p-nav">
      <ul className="p-nav__lists">
        {navLinks.map((navLink, index) => {
            return <NavLinkComp navLink={navLink} key={index}/>
        })}
      </ul>
    </nav>
  );
};
