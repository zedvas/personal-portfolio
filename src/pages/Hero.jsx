import { HeroAnim } from "../comps/HeroAnim";
import { HeroText } from "../comps/HeroText";
import { HeroVideo } from "../comps/HeroVideo";

export const Hero = () => {
  return (
    <div className="hero">
      <HeroAnim />
      <HeroText/>
      <HeroVideo/>
    </div>
  );
};
