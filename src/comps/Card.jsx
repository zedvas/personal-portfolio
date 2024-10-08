import { useState } from "react";
import "../styles/card.scss";
import { CardInfo } from "./CardInfo";

export const Card = ({
  fullStack,
  imageSrc,
  title,
  description,
  tools,
  githubLink,
  githubLinkBackend,
  demoLink,
  portfolio,
}) => {
  const [overlayHidden, setoverlayHidden] = useState(false);
  const toggleOverlay = () => {
    setoverlayHidden(!overlayHidden);}


  return (
    <div className={fullStack ? "card fullstack" : "card"}>
      <a href={demoLink} target="_blank">
        <h2>{Array.from(title).map((char, index)=><span key={index}>{char}</span>)}</h2>
      </a>
      <CardInfo
        tools={tools}
        description={description}
        imageSrc={imageSrc}
        overlayHidden={overlayHidden}
        toggleOverlay={toggleOverlay}
        title={title}
      />
      <div
        className={
          fullStack
            ? "buttonContainer fullStackButtonContainer"
            : "buttonContainer"
        }
      >
        {fullStack ? (
          <div className="fullStackButtons">
            <button>
              <a href={githubLink} target="_blank">
                code - front
              </a>
            </button>
            <button>
              <a href={githubLinkBackend} target="_blank">
                code - back
              </a>
            </button>
          </div>
        ) : (
          <button>
            <a href={githubLink} target="_blank">
              code
            </a>
          </button>
        )}
        {!portfolio && (
          <button>
            <a href={demoLink} className="demo" target="_blank">
              live demo
            </a>
          </button>
        )}
      </div>
    </div>
  );
};
