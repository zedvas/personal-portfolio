import { About } from "./About";
import { Work } from "./Work";
import { Contact } from "./Contact";
import { useEffect, useRef } from "react";

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

  return (
    <div className="pages">
      <div ref={about}>
        <About />
      </div>
      <div ref={work}>
        <Work />
      </div>
      <div ref={contact}>
        <Contact
          ref={contact}
          openReactModal={openReactModal}
          changeModalMessage={changeModalMessage}
        />
      </div>
    </div>
  );
};
