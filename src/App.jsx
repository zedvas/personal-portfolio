import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { Hero } from "./pages/Hero";
import { Nav } from "./comps/Nav";

function App() {
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
}

export default App;
