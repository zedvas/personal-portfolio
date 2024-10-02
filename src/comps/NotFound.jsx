import { HashLink as Link } from "react-router-hash-link";
import { Nav } from "./Nav";
import "../styles/notFound.scss"

export const NotFound = () => {
  return (
    <div className="section notFound">
      <div className="page">
  <h1>whoops...</h1>
  <h2>that page can't be found</h2>

      </div>
    </div>
  );
};
