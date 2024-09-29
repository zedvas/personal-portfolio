import gsap from "gsap";

export const NavLink = ({ navLink }) => {
  return (
    <li className="p-nav__list">
      <a href={`#${navLink}`} id="style-2" data-replace={navLink}>
        <span>{navLink}</span>
      </a>
    </li>
  );
};
