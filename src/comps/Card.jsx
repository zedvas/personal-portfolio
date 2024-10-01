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
    const clickHandler = (e) => {
      console.log(demoLink);
    };
  
    return (
      // <div className={fullStack ? "card fullstack" : "card"} onClick={(e)=>clickHandler(e)}>
      //   <div className="imageContainer">
      //     <img src={imageSrc}/>
      //     <div className="textContainer">
      //       <h2>{title}</h2>
      //       <p>{description}</p>
      //     </div>
      //   </div>
      //   <div className="infoContainer">
      //     <div className="techContainer">
      //       {tools.map((tool) => (
      //         <span key={tool}>{tool}</span>
      //       ))}
      //     </div>
      //   </div>
      //   <div className="buttonContainer">
      //     {fullStack ? (
      //       <>
      //         <button>
      //           <a href={githubLink} target="_blank">
      //             Github - Front end
      //           </a>
      //         </button>
      //         <button>
      //           <a href={githubLinkBackend} target="_blank">
      //             Github - Back end
      //           </a>
      //         </button>
      //       </>
      //     ) : (
      //       <button>
      //         <a href={githubLink} target="_blank">
      //           Github
      //         </a>
      //       </button>
      //     )}
      //     {!portfolio && <button>
      //       <a href={demoLink} target="_blank">
      //         Live demo
      //       </a>
      //     </button>}
  
      //   </div>
      // </div>
      <div className={fullStack ? "card fullstack" : "card"}>
        <a href={demoLink} target="_blank">
          <img src={imageSrc} onClick={(e) => clickHandler(e)} />
        </a>
        <div className="textContainer">
          <a href={demoLink} target="_blank">
            <h2>{title}</h2>
          </a>
          <p>{description}</p>
          <div className="techContainer">
            {tools.map((tool) => (
              <span key={tool}>{"<" + tool + ">"}</span>
            ))}
          </div>
          <div className={fullStack ? "buttonContainer fullStackButtonContainer": "buttonContainer"}>
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
              <button>
                <a href={demoLink} target="_blank">
                  Live demo
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };
  