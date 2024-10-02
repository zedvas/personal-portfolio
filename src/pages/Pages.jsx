import { About } from "./About";
import { Work } from "./Work";
import { Contact } from "./Contact";

export const Pages = ({openReactModal, changeModalMessage}) => {
  return (
    <div className="pages">
      <About />
      <Work />
      <Contact
        openReactModal={openReactModal}
        changeModalMessage={changeModalMessage}
      />
    </div>
  );
};
