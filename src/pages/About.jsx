import { HeroVideo } from "../comps/HeroVideo";
import { JuggleContainer } from "../comps/JuggleContainer";
import { Skills } from "../comps/Skills";
import { TextChangeAnim } from "../comps/TextChangeAnim";

export const About = () => {
  return (
    <div className="about section" id="about">
      <div className="page">
        <div>
          <TextChangeAnim />

          <p className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea quae
            cupiditate, distinctio libero aut suscipit! Modi sed nam nobis,
            minus quod eum nihil sequi amet pariatur voluptatibus. Maxime,
            aliquid autem exercitationem magnam dolor dignissimos, tenetur illo
            velit eligendi suscipit quo ipsa. Ea odit rerum labore numquam
            corporis distinctio saepe accusantium.
          </p>
        </div>
        <Skills/>
      </div>
    </div>
  );
};
