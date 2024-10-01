import React, { useEffect, useRef } from "react";
import { words } from "./words";

import "../styles/spinner.scss";

const Spinner = ({ timeline }) => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordGroupsRef = useRef(null);

  const introAnimation = (wordGroupsRef) => {
    const tl = gsap.timeline();
    tl.to(wordGroupsRef.current, {
      yPercent: -80,
      duration: 5,
      ease: "power3.inOut",
    });

    return tl;
  };

  // useEffect(() => {
  //   timeline &&
  //     timeline
  //       .add(introAnimation(wordGroupsRef))
  // }, [timeline]);

  return (
    <div className={loader__wrapper}>
      <div className={loader__progressWrapper}>
        <div className={loader__progress} ref={progressRef}></div>
        <span className={loader__progressNumber} ref={progressNumberRef}>
          0
        </span>
      </div>
      <div className={loader} ref={loaderRef}>
        <div className={loader__words}>
          <div className={loader__overlay}></div>
          <div ref={wordGroupsRef} className={loader__wordsGroup}>
            {words.map((word, index) => {
              return (
                <span key={index} className={loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
