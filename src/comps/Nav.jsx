import { NavLinkComp } from "./NavLinkComp";
import "../styles/nav.scss";
import { useState } from "react";

export const Nav = () => {
  const navLinks = ["home", "about", "work", "contact"];
  const [interacted, setInteracted] = useState(false);

  const clickHandler = (e) => {
    const link = e.target.innerText;
    if (link === "about" || link === "work" || link === "contact") {
      setInteracted(true);
    }
  };

  return (
    <nav className="p-header__nav p-nav">
      <ul className="p-nav__lists" onClick={clickHandler}>
        {navLinks.map((navLink, index) => {
          return (
            <NavLinkComp pathTo={navLink} key={index} interacted={interacted} />
          );
        })}
      </ul>
    </nav>
  );
};
