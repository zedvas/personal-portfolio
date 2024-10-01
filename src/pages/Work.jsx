import { Hands } from "../comps/Hands";
import { Juggle } from "../comps/Juggle";
import { JuggleContainer } from "../comps/JuggleContainer";
import { Projects } from "../comps/Projects";
import { Skills } from "../comps/Skills";
import "../styles/work.scss"

export const Work = () => {
    return ( <div className="work section" id="work">
        <div className="page">
      
          <Skills/>
          <Projects/>
        </div>
    </div>);
}