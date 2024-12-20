import Button  from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ToastrContent() {
  const notifySuccess = () => toast.success("This is a success toast!");
  const notifyError = () => toast.error("This is an error toast!");
  return (
    <>
      <ToastContainer
        position="top-right"
        style={{ marginTop: "100px" }}
        autoClose={5000}
      />

      <div className="d-flex flex-wrap gap-3">
        <Button onClick={notifySuccess}>Show Success Toast</Button>
        <Button onClick={notifyError}>Show Error Toast</Button>

        <a
          href="https://fkhadra.github.io/react-toastify/positioning-toast"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          for more example
        </a>
      </div>
    </>
  );
}
