import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export const NavLinkComp = ({ pathTo, setActivePage, activePage }) => {

  const { hash } = useLocation();
  const isActive = activePage === pathTo;
  const onHomepage = hash ==="" && pathTo === "home";

  return (
    <li className="navLink" >
      <Link onClick={()=>setActivePage(pathTo)} className={onHomepage ? "active onHomepage" : isActive ? "active" : ""} exact="true" to={pathTo === "home" ? "/" : `/page#${pathTo}`}  data-replace={pathTo}>
        <span>{pathTo}</span>
      </Link>
    </li>
  );
};
