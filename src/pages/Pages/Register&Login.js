import { useEffect, useState } from "react";
import "./Register&Login.scss";
import { Button, Form, InputGroup, NavLink } from "../../components/bootstrapComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import PageWrapper from "../../components/PageWrapper";
export default function Login() {
  const [register, setRegister] = useState(true);
  const [showReg, setShowReg] = useState(false);
  const [showLog, setShowLog] = useState(true);
  function handleForm() {
    setRegister(!register);
    setShowReg(!showReg);
    setShowLog(!showLog);
    setIsClicked(!isClicked);
  }

  const [isClicked, setIsClicked] = useState(false);
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setSmallScreen(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <PageWrapper title="Register & Login">
      <div>
        
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "90vh",
          overflow: "hidden",
          top:'30px'
        }}
        className={`form-card container d-flex  align-items-center ${
          smallScreen ? "w-100" : "w-50"
        }`}
      >
        {/* form Div */}
        <div
          style={{
            position: "absolute",
            left: !smallScreen ? (isClicked ? "50%" : "50%") : "100%",
            transform: smallScreen
              ? "translateX(-100%)"
              : isClicked
              ? "translateX(0)"
              : "translateX(-100%)",
            height: "100%",
            width: smallScreen ? "100%" : "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            transition: "transform 0.5s ease",
          }}
          className="form-div"
        >
          <div className="w-100">
            {register ? (
              <Form
                className={`login sliding-div w-100 p-3 p-lg-4 ${
                  showLog ? "show-login" : ""
                }`}
              >
                <h3 className=" mb-4">Login</h3>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faLock} />
                  </InputGroup.Text>
                </InputGroup>

                <Button type="submit" className="login-btn w-100">
                  Login
                </Button>

                <div
                  className="my-3 "
                  style={{
                    display: smallScreen ? "block" : "none",
                  }}
                >
                 <div className="d-flex gap-2">
                    <span>Don't have an account ?</span>
                    <NavLink onClick={handleForm}>
                      {register ? "Register" : "Login"}
                    </NavLink>
                  </div>
                </div>
              </Form>
            ) : (
              <form
                className={`register sliding-div w-100 p-3 p-lg-4 ${
                  showReg ? "show-register" : ""
                }`}
              >
                <h3 className=" mb-4">Register</h3>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Name"
                    aria-label="Name"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">
                    <FontAwesomeIcon icon={faUser} />
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faLock} />
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Confirm Password"
                    aria-label="Confirm Password"
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faLock} />
                  </InputGroup.Text>
                </InputGroup>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    className="text-secondary"
                    label="I agree to terms & conditions"
                  />
                </Form.Group>
                <Button type="submit" className="register-btn w-100">
                  Register
                </Button>
                <div
                  className="my-3 "
                  style={{
                    display: smallScreen ? "block" : "none",
                  }}
                >
                  <div className="d-flex gap-2">
                    <span>Have already an account ?</span>
                    <NavLink onClick={handleForm}>
                      {register ? "Register" : "Login"}
                    </NavLink>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* welcome Div */}
        <div
          style={{
            position: "absolute",
            right: !smallScreen ? (isClicked ? "50%" : "50%") : "100%",
            transform: isClicked ? "translateX(0)" : "translateX(100%)",
            width: smallScreen ? "100%" : "50%",
            height: "100%",
            display: smallScreen ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            transition: "transform 0.5s ease",
          }}
          className="welcome-div"
        >
          <div className="btn-div w-50 d-flex flex-column justify-content-center align-items-center vh-100">
            <h1 className="text-white">welcome</h1>
            <Button onClick={handleForm} className="welcome-btn w-100">
              {register ? "Register" : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
