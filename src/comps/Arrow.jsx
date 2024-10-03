import "../styles/arrow.scss";

export const Arrow = ({ arrowname, src, text }) => {
  return (
    <div className={arrowname}>
      <p>{text}</p>
      <iframe
        src={src}
        width="48"
        height="33"
      ></iframe>
    </div>
  );
};
