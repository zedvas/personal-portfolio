import { useState } from "react";
import "../styles/card.scss";

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
  const [imageVisible, setImageVisible] = useState(false);
  const showImage = () => {
    setImageVisible(true);
  };
  const hideImage = () => {
    setImageVisible(false);
  };

  return (
    <div className={fullStack ? "card fullstack" : "card"}>
      <a href={demoLink} target="_blank">
        <h2>{title}</h2>
      </a>
      <div
        className="container"
        onMouseEnter={showImage}
        onMouseLeave={hideImage}
        onMouseDown={showImage}
        onClick={Image}
      >
        <img src={imageSrc} onClick={hideImage} />
        <div
          className={
            imageVisible ? "textContainer hideTextContainer" : "textContainer "
          }
        >
          <p>{description}</p>
          <div className="techContainer">
            {tools.map((tool) => (
              <span key={tool}>{"<" + tool + ">"}</span>
            ))}
          </div>
        </div>
      </div>
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
                Code - front
              </a>
            </button>
            <button>
              <a href={githubLinkBackend} target="_blank">
                Code - back
              </a>
            </button>
          </div>
        ) : (
          <button>
            <a href={githubLink} target="_blank">
              Code
            </a>
          </button>
        )}
        {!portfolio && (
          <button className="demo">
            <a href={demoLink} target="_blank">
              Live demo
            </a>
          </button>
        )}
      </div>
    </div>
  );
};
