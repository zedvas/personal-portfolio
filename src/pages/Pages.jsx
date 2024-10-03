import { About } from "./About";
import { Work } from "./Work";
import { Contact } from "./Contact";
import { useEffect, useRef, useState } from "react";
import {
  Pause,
  PlayArrow,
  SportsBaseball,
  SportsBasketballRounded,
} from "@mui/icons-material";

export const Pages = ({ openReactModal, changeModalMessage }) => {
  const about = useRef(null);
  const work = useRef(null);
  const contact = useRef(null);

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

  const [animOn, setAnimOn] = useState(false);
  const [points, setPoints] = useState(0);

  const animHandler = (e) => {
    Array.from(e.target.classList).includes("basketball")
      ? setPoints(points + 1)
      : "";
    setAnimOn(!animOn);
  };

  return (
    <div className="pages">
      <div className="game">
        <div >
          <iframe
            src="https://giphy.com/embed/3o7TKSxdQJIoiRXHl6"
            width="100%"
            height="100%"
           
          ></iframe>
        </div>
    
        <button className={"playPause"} onClick={animHandler}>
          {animOn ? <Pause /> : <PlayArrow />}
        </button>{" "}
        <h1>Points: {points}</h1>
        <SportsBaseball
          onClick={animHandler}
          className={animOn ? "basketballAnim basketball" : "basketball"}
        />
      </div>

      <div ref={about}>
        <About />
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
