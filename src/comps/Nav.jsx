import { NavLinkComp } from "./NavLinkComp";
import "../styles/nav.scss";
import { useState } from "react";

export const Nav = ({activePage, setActivePage}) => {
  const navLinks = ["home", "about", "work", "contact"];


  return (
    <nav>
      <ul>
        {navLinks.map((navLink, index) => {
          return (
            <NavLinkComp pathTo={navLink} key={index} activePage={activePage} setActivePage={setActivePage}/>
          );
        })}
      </ul>
    </nav>
  );
};
