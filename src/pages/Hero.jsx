import { HeroAnim } from "../comps/HeroAnim";
import { HeroText } from "../comps/HeroText";
import { HeroVideo } from "../comps/HeroVideo";
import { PageDown } from "../comps/PageDown";

export const Hero = () => {
  return (
    <div className="hero section">
      <div className="page">
        <HeroAnim />
        {/* <HeroVideo/> */}
        <PageDown/>
      </div>
    </div>
  );
};
