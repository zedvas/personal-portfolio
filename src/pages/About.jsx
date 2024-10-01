import { HeroVideo } from "../comps/HeroVideo";
import { JuggleContainer } from "../comps/JuggleContainer";
import { Skills } from "../comps/Skills";
import { TextChangeAnim } from "../comps/TextChangeAnim";
import "../styles/about.scss"

export const About = () => {
  return (
    <div className="about section" id="about">
      <div className="page">
        <div>
          <TextChangeAnim />

          <p className="desc">
          I’m Zahra, a software developer with a passion for problem-solving, a knack for producing innovative solutions, and a never-ending curiosity to keep expanding my knowledge. When I’m not busy crafting elegant code, you’ll find me hunched over a computer exploring the latest tech trends or tinkering with new tools. I’d love to connect with others who share the same enthusiasm for innovation so do say hello
          </p>
          <button><a href="/ZahraVasanji.pdf" target="_blank" download>Take a look at my resume</a></button>
        </div>
      </div>
    </div>
  );
};
