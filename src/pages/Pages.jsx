import { About } from "./About";
import { Work } from "./Work";
import { Contact } from "./Contact";
import { useEffect, useRef, useState } from "react";
import { SportsBaseball } from "@mui/icons-material";
import "../styles/game.scss";
import { Jigsaw } from "../comps/Jigsaw";

export const Pages = ({ openReactModal, changeModalMessage }) => {
  const about = useRef(null);
  const work = useRef(null);
  const contact = useRef(null);
  const [animOn, setAnimOn] = useState(false);
  const [points, setPoints] = useState(0);
  const [count, setCount] = useState(3);


  useEffect(() => {
    const handleScroll = () => {
      const sections = [about, work, contact];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const top = section.current.offsetTop;
        const height = section.current.offsetHeight;
        const bottom = top + height;

        if (scrollPosition >= top && scrollPosition < bottom) {
          window.history.replaceState(
            null,
            null,
            `#${section.current.firstChild.id}`
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animHandler = (e) => {
    Array.from(e.target.classList).includes("basketball")
      ? setPoints(points + 1)
      : "";
    setAnimOn(!animOn);
  };

  return (
    <div className="pages">
      <SportsBaseball
        onClick={animHandler}
        className={count==="GO" && animOn ? "basketballAnim basketball" : "basketball"}
      />
      <div ref={about} >
        <About animHandler={animHandler} animOn={animOn} setAnimOn={setAnimOn} points={points} count={count} setCount={setCount}/>
      </div>
      <div ref={work}>
        <Work />
      </div>
      <div ref={contact}>
        <Contact
          openReactModal={openReactModal}
          changeModalMessage={changeModalMessage}
        />
      </div>
    </div>
  );
};
