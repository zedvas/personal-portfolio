import { useState } from "react";
import { Hands } from "./Hands";
import { Juggle } from "./Juggle";

export const JuggleContainer = () => {
  const [fastJuggle, setFastJuggle] = useState(false);

  const fastJuggleHandler = () => {
    setFastJuggle(true);
    setTimeout(() => {
      setFastJuggle(false);
    }, 3000);
  };
  return (
    <div
      className={fastJuggle ? "juggleContainer fastJuggle" : "juggleContainer"}
      onClick={fastJuggleHandler}
      onMouseEnter={fastJuggleHandler}
    >
      <Juggle />
      <Hands />
    </div>
  );
};
