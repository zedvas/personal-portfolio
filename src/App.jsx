import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { Hero } from "./pages/Hero";
import { Nav } from "./comps/Nav";
import { Work } from "./pages/Work";

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <Hero />
      <Work/>
    </div>
  );
}

export default App;
