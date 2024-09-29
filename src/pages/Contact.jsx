import { Form } from "../comps/Form";
import { HeroVideo } from "../comps/HeroVideo";

export const Contact = () => {
        return (
          <div className="contact section" id="contact">
            <div className="page">
              <div className="left"></div><div className="right"></div>
              <div className="overlay"> <h2>How can I help?</h2>
                <Form/>
                {/* <HeroVideo/> */}
             </div>
             
            </div>
          </div>
        );
      };
