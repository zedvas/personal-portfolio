import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export const NavLinkComp = ({ pathTo, interacted }) => {

  const { hash } = useLocation();
  const isActive = hash === `#${pathTo}`;
  const onHomepage = hash ==="" && pathTo === "home";

  return (
    <li className="navLink">
      <Link className={onHomepage ? "active onHomepage" : isActive ? "active" : ""} exact to={pathTo === "home" ? "/" : `/page#${pathTo}` }  data-replace={pathTo}>
        <span>{pathTo}</span>
      </Link>
    </li>
  );
};
