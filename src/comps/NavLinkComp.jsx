import gsap from "gsap";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export const NavLinkComp = ({ navLink }) => {
  const { hash } = useLocation();

  return (
    <li className="p-nav__list">
      <Link
        to={`#${navLink}`}
        id="style-2"
        data-replace={hash === `#${navLink}` ? `< ${navLink} >`: navLink}
        className={hash === `#${navLink}` ? "active" : ""}
        // onClick={()=>setIsActive(hash === `#${navLink}`)}
      >
        <span>
         {hash === `#${navLink}` ? `< ${navLink} >`: navLink }

        </span>
      </Link>
    </li>
  )
};
