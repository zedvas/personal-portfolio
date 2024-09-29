import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { Home } from "./pages/Home";
import { Nav } from "./comps/Nav";
import { Work } from "./pages/Work";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <Home />
      <Work/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
