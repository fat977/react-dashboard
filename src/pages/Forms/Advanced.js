import { useState } from "react";
import { Button, Card, Col, Container, Form, Nav, Row } from "../../components/bootstrapComponent";

import PageWrapper from "../../components/PageWrapper";
export default function Advanced() {
  const [time, setTime] = useState("10:00");
  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };

  const [date, setDate] = useState("");

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const [step, setStep] = useState(1);

  // Handle Next and Previous Steps
  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <PageWrapper title="Advanced Form Elements">
      <div className="p-4">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between">
            <h3>Advanced Form</h3>
          </div>
          <Row className=" my-3">
            <Col xs={12} md={6} lg={6} className="mt-lg-0 mt-sm-3">
              <Card className="mt-3">
                <Card.Header className="bg-primary text-white py-3">
                  Switch
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Check this switch"
                    />
                    <Form.Check // prettier-ignore
                      disabled
                      type="switch"
                      label="disabled switch"
                      id="disabled-custom-switch"
                    />
                  </Form>
                </Card.Body>
              </Card>

              <Card className="mt-3">
                <Card.Header className="bg-primary text-white py-3">
                  Validation
                </Card.Header>
                <Card.Body>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                      >
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="First name"
                          defaultValue="Mark"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Last name"
                          defaultValue="Otto"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                      />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={6} className="mt-lg-0 mt-sm-3">
              <Card className="mt-3">
                <Card.Header className="bg-primary text-white py-3">
                  Switch Bootstrap
                </Card.Header>
                <Card.Body>
                  <div className="border" style={{ width: "90px" }}>
                    <div
                      onClick={handleClick}
                      className={`bg-${
                        isChecked ? "success" : "danger"
                      } text-white px-3 py-2 float-${
                        isChecked ? "start" : "end"
                      }`}
                      style={{
                        width: "70px",
                        cursor: "pointer",
                        transition: " 0.3s ease-in-out",
                      }}
                    >
                      {isChecked ? "ON" : "OFF"}
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <Card className="mt-3">
                <Card.Header className="bg-primary text-white py-3">
                  Color , Date & Time Picker
                </Card.Header>
                <Card.Body>
                  {/* <TimePicker
                  onChange={setTime}
                  value={time}
                  disableClock={true} // Hides the clock icon
                /> */}
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="exampleTimeInput">
                      Time picker
                    </Form.Label>
                    <Form.Control
                      id="exampleTimeInput"
                      type="time"
                      value={time}
                      onChange={handleChangeTime}
                      style={{ fontSize: "16px", padding: "5px" }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="exampleDateInput">
                      Date picker
                    </Form.Label>
                    <Form.Control
                      id="exampleDateInput"
                      type="date"
                      value={date}
                      onChange={handleChangeDate}
                      style={{
                        fontSize: "16px",
                        padding: "5px",
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="exampleColorInput">
                      Color picker
                    </Form.Label>
                    <Form.Control
                      type="color"
                      id="exampleColorInput"
                      defaultValue="#563d7c"
                      title="Choose your color"
                    />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className=" my-3">
            <Col>
              <Card className="mt-3">
                <Card.Header className="bg-primary text-white py-3">
                  Form Stepper
                </Card.Header>
                <Card.Body>
                  {/* Step Navigation */}
                  <Nav fill variant="tabs" activeKey={step}>
                    <Nav.Item>
                      <Nav.Link eventKey={1} onClick={() => setStep(1)}>
                        Step 1
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey={2} onClick={() => setStep(2)}>
                        Step 2
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey={3} onClick={() => setStep(3)}>
                        Step 3
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Form className="mt-4">
                    {/* Step 1 */}
                    {step === 1 && (
                      <div>
                        <h4>Step 1: Personal Information</h4>
                        <Form.Group controlId="formName" className="mb-3">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            required
                          />
                        </Form.Group>
                        <Form.Group controlId="formEmail" className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            required
                          />
                        </Form.Group>
                      </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                      <div>
                        <h4>Step 2: Address Details</h4>
                        <Form.Group controlId="formAddress" className="mb-3">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your address"
                            required
                          />
                        </Form.Group>
                        <Form.Group controlId="formCity" className="mb-3">
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your city"
                            required
                          />
                        </Form.Group>
                      </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                      <div>
                        <h4>Step 3: Review & Submit</h4>
                        <p>Review your details before submitting the form.</p>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="secondary"
                        onClick={prevStep}
                        disabled={step === 1}
                      >
                        Previous
                      </Button>
                      {step < 3 ? (
                        <Button variant="primary" onClick={nextStep}>
                          Next
                        </Button>
                      ) : (
                        <Button variant="success" type="submit">
                          Submit
                        </Button>
                      )}
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </PageWrapper>
  );
}
