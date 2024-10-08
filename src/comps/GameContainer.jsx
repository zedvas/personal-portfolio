import { useEffect, useState } from "react";
import "../styles/about.scss";
import { Game } from "./Game";
import { Jigsaw } from "./Jigsaw";

export const GameContainer = ({
  animHandler,
  animOn,
  setAnimOn,
  points,
  setPoints,
  isOpen,
  setIsOpen,
  gameStarted,
  setGameStarted,
  count,
  setCount,
}) => {
  useEffect(() => {
    if (gameStarted) {
      let countdown = setInterval(() => {
        setCount((count) => {
          if (isNaN(count)) {
            setCount(3);
            setAnimOn(false);
            setPoints(0);
          }
          if (count === 1) {
            clearInterval(countdown);
            setAnimOn(!animOn);
            return "GO";
          } else return count - 1;
        });
      }, 1000);
    }
  }, [gameStarted]);

  const clickHandler = () => {
    setGameStarted(!gameStarted);
  };
  const peekabooHandler = (e) => {
    if (isOpen) {
      animHandler(e);
      setGameStarted(false);
      setCount(3);
      setPoints(0);
    }
    setIsOpen(!isOpen);
  };
  return (
    <div className="gameContainer">
      {/* {isOpen && !gameStarted ? (
        <div className="gameIntro">
          <Jigsaw />
          <h2>i want to play a game</h2>
          <button>ok</button>
          <button>ok</button>
        </div>
      ) : isOpen && gameStarted ? (
        <Game />
      ) : (
        ""
      )} */}

      <div
        className={
          isOpen ? "peekaboo openPeekaboo" : "peekaboo closedPeekaboo "
        }
      >
        <div className="left">
          {isOpen && !gameStarted ? (
            <div className="gameIntro">
              <h2>i want to play a game</h2>
              <div className="buttons">
                <button onClick={clickHandler}>ok</button>
                <button onClick={clickHandler}>ok</button>
              </div>
            </div>
          ) : isOpen && gameStarted && count !== "GO" ? (
            <h2>click the ball to score a point in {count}</h2>
          ) : isOpen && gameStarted && count === "GO" ? (
            <Game animHandler={animHandler} animOn={animOn} points={points} />
          ) : (
            ""
          )}
        </div>
        <div className="right" onClick={peekabooHandler} aria-hidden="true">
          <p>psssttt...</p>
        </div>
      </div>
    </div>
  );
};
