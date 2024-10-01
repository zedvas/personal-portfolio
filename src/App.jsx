import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.scss";
import { Home } from "./pages/Home";
import { Nav } from "./comps/Nav";
import { Work } from "./pages/Work";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

import { Modal } from "./comps/Modal";
import { useState } from "react";
// import { Spinner } from "./comps/Spinner";
function App() {
  const [reactModalIsOpen, setReactModalIsOpen] = useState(false);
  const [modalText, setModalText] = useState("")

  const openReactModal = () => {
    setReactModalIsOpen(true);
  };

  const closeReactModal = () => {
    setReactModalIsOpen(false);
  };

  const changeModalMessage = (message) => {
    setModalText(message)
  }


  return (
    <div className={reactModalIsOpen? "wrapper disableScroll": "wrapper"}>
        <Modal
        reactModalIsOpen={reactModalIsOpen}
        closeReactModal={closeReactModal}
        modalText={modalText}
      />
      {/* <Spinner/> */}
      <Nav />
      <Home />
      <About />
      <Work />
      <Contact openReactModal={openReactModal} changeModalMessage={changeModalMessage}/>
    </div>
  );
}

export default App;
