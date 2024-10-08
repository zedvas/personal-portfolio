import { Arrow } from "../comps/Arrow";
import { Form } from "../comps/Form";
import { HeroVideo } from "../comps/HeroVideo";
import { JuggleContainer } from "../comps/JuggleContainer";
import { Socials } from "../comps/Socials";
import "../styles/contact.scss";

export const Contact = ({ openReactModal, changeModalMessage }) => {
  return (
    <div className="contact section" id="contact">
      <div className="page">
        <Arrow arrowname="arrow1" src="https://giphy.com/embed/MEKwzt0g0CLPEQvp0q" text="tap me"/>
        <div className="juggleWrapper">
          <JuggleContainer />
        </div>
        <h1>talk nerdy to me</h1>
        <div className="formContainer">
          <Form
            openReactModal={openReactModal}
            changeModalMessage={changeModalMessage}
          />
          <Socials />
        </div>

        {/* <HeroVideo/> */}
      </div>
    </div>
  );
};
