import { Form } from "../comps/Form";
import { HeroVideo } from "../comps/HeroVideo";
import { JuggleContainer } from "../comps/JuggleContainer";
import { Socials } from "../comps/Socials";
import "../styles/contact.scss"


export const Contact = () => {
  return (
    <div className="contact section" id="contact">
      <div className="page">
          {/* <h2 title="How can I help?">
            How can I help?
          </h2> */}


        <div className="juggleWrapper">
          <JuggleContainer />
        </div>
        <Form />       <Socials/>

        {/* <HeroVideo/> */}
      </div>
    </div>
  );
};
