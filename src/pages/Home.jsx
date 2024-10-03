import { useRef } from "react";
import { HeroAnim } from "../comps/HeroAnim";
import { HeroText } from "../comps/HeroText";
import { HeroVideo } from "../comps/HeroVideo";
import { PageDown } from "../comps/PageDown";
import "../styles/home.scss";
import { useLayoutEffect } from "react";
import "../styles/splashScreen.scss";
// import TextPlugin from "gsap/TextPlugin";
// import { TextPlugin } from 'gsap/TextPlugin';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export const Home = () => {
  const homeRef = useRef(null);

  const tl = useRef();

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     tl.current = gsap
  //       .timeline()
  //       .from("h1", {
  //         y: "-100vh",
  //       })
  //       .set(".focus", {
  //         x: "100vw",
  //       })
  //       .to(".focus", {x:0, duration:2})
  //     // .from(".focus", { xPercent: -100, duration: 2, ease: "bounce.out"  });
  //   }, homeRef);
  // }, []);

  return (
    
    <div className="home section" id="home" ref={homeRef}>
        <div className="page">
          <HeroAnim />
          {/* <HeroVideo/> */}
          <PageDown />
        {/* </div> */}
      </div>
    </div>
  );
};
