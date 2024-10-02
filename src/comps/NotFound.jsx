import { HashLink as Link } from "react-router-hash-link";
import { Nav } from "./Nav";

export const NotFound = () => {
  return (
    <div className="section">
      <div className="page">
        <Nav/>
        <h1>Oops that page doesn't exist!</h1>
        <h2>Use the links on the right to find your way back</h2>
      </div>
    </div>
  );
};
