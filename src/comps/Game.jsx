import {
  Pause,
  PlayArrow,
  SportsBaseball,
  SportsBasketballRounded,
} from "@mui/icons-material";
import { useState } from "react";
import "../styles/game.scss";
export const Game = ({animHandler,animOn,points}) => {


  return (
    <div className="game">
      <button className={"playPause"} onClick={animHandler}>
        {animOn ? <Pause /> : <PlayArrow />}
      </button>{" "}
      <h1>Points: {points ? points : 0}</h1>
      
    </div>
  );
};
