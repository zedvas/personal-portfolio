import gsap from "gsap";

export const NavLink = ({ navLink }) => {
  let beforeSpans;
  let afterSpans;
  const handleMouseEnter = (e) => {
    console.log(e.target.parentNode.nextSibling.children);
    if (e.target.parentNode.classList[0] === "before") {
      beforeSpans = e.target.parentNode.children;
    }
    if (e.target.parentNode.nextSibling.classList[0] === "after") {
      afterSpans = e.target.parentNode.nextSibling.children;
    }
    console.log("beforespans", beforeSpans)
    console.log("afterspans", afterSpans)
    gsap.to(beforeSpans, { y: "-100px", stagger: 0.03, ease: "power2.out" });
    gsap.to(afterSpans, { y: "0px", stagger: 0.03, ease: "power2.out" });
  };

  const handleMouseLeave = (e) => {
    if (e.target.parentNode.classList[0] === "before") {
        beforeSpans = e.target.parentNode.children;
      }
      if (e.target.parentNode.nextSibling.classList[0] === "after") {
        afterSpans = e.target.parentNode.nextSibling.children;
      }
  
    gsap.to(beforeSpans, { y: "0%", stagger: 0.03, ease: "power2.out" });
    gsap.to(afterSpans, { y: "100%", stagger: 0.03, ease: "power2.out" });
  };

  return (
    <li className="p-nav__list">
      <a
        className="js-splitText is-active"
        href={`#${navLink}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="text-wrap">
          <div className="before">
            {Array.from(navLink).map((char, index) => {
              return <span key={index}>{char}</span>;
            })}
          </div>
          <div className="after">
            {Array.from(navLink).map((char, index) => {
              return <span key={index}>{char}</span>;
            })}
          </div>
        </span>
      </a>
    </li>
  );
};
