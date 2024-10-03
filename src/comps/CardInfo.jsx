import { Sync } from "@mui/icons-material";
import "../styles/card.scss";

export const CardInfo = ({
  tools,
  description,
  imageSrc,
  overlayHidden,
  toggleOverlay
}) => {
  return (
    <div
      className="container"
    >
      <Sync className={overlayHidden ? "overlayHidden" : "overlayVisible"} onClick={toggleOverlay}/>
      <img src={imageSrc}/>
      <div className={overlayHidden ? "overlay overlayHidden" : "overlay "}>
        <p>{description}</p>
        <div className="techContainer">
          {tools.map((tool) => (
            <span key={tool}>{"<" + tool + ">"}</span>
          ))}
        </div>
      </div>
    </div>
  );
};