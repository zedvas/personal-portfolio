import { useEffect, useState } from "react";

export const TextChangeAnim = () => {
  const [count, setCount] = useState(0);
  const strings = [
    "drinking coffee",
    "writing code",
    "fixing bugs",
  ];

  useEffect(() => {
    const changeCount = setInterval(() => {
      if (count === strings.length-1) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 1000);

    return () => {
      clearInterval(changeCount);
    };
  }, [count]);

  //   displayText();
  return (
    <p className="textChangeAnim">I like <span>{strings[count]}</span></p>
  );
};
