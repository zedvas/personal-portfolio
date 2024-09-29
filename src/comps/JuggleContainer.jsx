import { Hands } from "./Hands";
import { Juggle } from "./Juggle";

export const JuggleContainer = () => {
  return (
    <div className="juggleContainer">
      <Juggle />
      <Hands />
    </div>
  );
};
