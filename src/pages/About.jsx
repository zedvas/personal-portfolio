import { ArrowForward } from "@mui/icons-material";
import { HeroVideo } from "../comps/HeroVideo";
import { JuggleContainer } from "../comps/JuggleContainer";
import { Skills } from "../comps/Skills";
import { TextChangeAnim } from "../comps/TextChangeAnim";
import "../styles/about.scss";
import { Jigsaw } from "../comps/Jigsaw";
import { GameContainer } from "../comps/GameContainer";
import { useState } from "react";
import { Arrow } from "../comps/Arrow";

export const About = ({ animHandler, animOn, points , count, setCount}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="about section" id="about">
      <div className="page">
        <div>
          <TextChangeAnim />
          <p className="desc">

            I’m Zahra, a software developer with a passion for problem-solving,
            a knack for producing innovative solutions, and a never-ending
            curiosity to keep expanding my knowledge. When I’m not busy crafting
            elegant code, you’ll find me hunched over a computer exploring the
            latest tech trends or tinkering with new tools. I’d love to connect
            with others who share the same enthusiasm for innovation so do say
            hello
          </p>
          <button className="pdf">
            <a href="/ZahraVasanji.pdf" target="_blank" download>
              <ArrowForward />
              take a look at my resume
            </a>
          </button>
          <Arrow arrowname="arrow2" src="https://giphy.com/embed/WSxuismGwJHM8CAvBW" text="open me"/>

          <GameContainer
            animHandler={animHandler}
            animOn={animOn}
            points={points}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            gameStarted = {gameStarted}
            setGameStarted ={setGameStarted} count={count} setCount={setCount}
          />
        </div>{" "}
        {isOpen && !gameStarted ? <Jigsaw/> : ""}
        
      </div>
    </div>
  );
};
