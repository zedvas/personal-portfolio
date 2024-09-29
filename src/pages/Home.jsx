import { HeroAnim } from "../comps/HeroAnim";
import { HeroText } from "../comps/HeroText";
import { HeroVideo } from "../comps/HeroVideo";
import { PageDown } from "../comps/PageDown";

export const Home = () => {
  return (
    <div className="home section" id="home">
      <div className="page">
        <HeroAnim />
        {/* <HeroVideo/> */}
        <PageDown/>
      </div>
    </div>
  );
};
