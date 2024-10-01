import { Close } from "@mui/icons-material";
import ReactModal from "react-modal";

export const Modal = ({ reactModalIsOpen, closeReactModal, modalText }) => {
  ReactModal.setAppElement("#root");

  const modalStyle = {
    overlay: {
      margin: "0 auto",
      padding: 0,
      position: "fixed",
      zIndex: 9,
      top: 0,
      left: 0,
    },
    content: {
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#403d39",
      color: "#fffcf2",
      borderRadius: "20px",
      maxHeight: "400px",
      width: "300px",
      margin: "auto",
      textAlign: "center",
      fontWeight: 500,
      fontSize: "1.1rem",
      overflow: "hidden"
    },
  };
  return (
    <>
      <ReactModal
        isOpen={reactModalIsOpen}
        onRequestClose={closeReactModal}
        style={modalStyle}
      >
        <button
          style={{
            color:"#fffcf2",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            top: "20px",
            right: "20px",
          }}
        >
          <Close onClick={closeReactModal} />
        </button>
        {/* <p style={{maxWidth: "250px"}}>{modalText}</p> */}
        <>{modalText}</>
      </ReactModal>
    </>
  );
};