import { useState } from "react";
import { Button, Toast } from "../../../components/bootstrapComponent";
import "react-toastify/dist/ReactToastify.css";

export default function ToastContent() {
  const [show, setShow] = useState(false);

  return (
   
      <>
        <Button onClick={() => setShow(true)}>Show Toast</Button>

        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
          className="d-inline-block m-1"
          bg="dark"
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className="Dark text-white">
            Hello, world! This is a toast message.
          </Toast.Body>
        </Toast>
      </>
   
  );
}
