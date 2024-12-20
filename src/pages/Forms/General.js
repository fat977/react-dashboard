import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "../../components/bootstrapComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PageWrapper from "../../components/PageWrapper";

export default function General() {
  return (
    <PageWrapper title="General Form Elements">
      <div className="p-4">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between">
            <h3>General Form</h3>
          </div>
          <Row className=" my-3">
            <Col xs={12} md={6} lg={6} className="mt-lg-0 mt-sm-3">
              <Card className="mt-3">
                <Card.Header className="bg-primary text-white py-3">
                  Basic Form
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text muted>
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
              <Card className="mt-3">
                <Card.Header className="bg-primary text-white py-3">
                  Sizing
                </Card.Header>
                <Card.Body>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="Large text"
                  />
                  <br />
                  <Form.Control type="text" placeholder="Normal text" />
                  <br />
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Small text"
                  />
                  <br />
                  <Row>
                    <Col sm="5">
                      <Form.Control type="password" placeholder="col-5" />
                    </Col>
                    <Col sm="4">
                      <Form.Control type="password" placeholder="col-4" />
                    </Col>
                    <Col sm="3">
                      <Form.Control type="password" placeholder="col-3" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mt-3">
                <Card.Header className="bg-primary text-white py-3">
                  Input Group
                </Card.Header>
                <Card.Body>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon2">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="basic-addon2"
                    />
                  </InputGroup>

                  <InputGroup size="lg" className="mb-3">
                    <Form.Control
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">
                      @example.com
                    </InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control aria-label="Amount (to the nearest dollar)" />
                    <InputGroup.Text>.00</InputGroup.Text>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Button variant="outline-secondary" id="button-addon1">
                      Button
                    </Button>
                    <Form.Control
                      aria-label="Example text with button addon"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control aria-label="Text input with dropdown button" />

                    <DropdownButton
                      variant="outline-secondary"
                      title="Dropdown"
                      id="input-group-dropdown-2"
                      align="end"
                    >
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item href="#">Another action</Dropdown.Item>
                      <Dropdown.Item href="#">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>

                  <InputGroup>
                    <InputGroup.Text>With textarea</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" />
                  </InputGroup>
                </Card.Body>
              </Card>
              <Card className="mt-3">
                <Card.Header className="bg-primary text-white py-3">
                  Check & Radio
                </Card.Header>
                <Card.Body>
                  <Form>
                    {["checkbox", "radio"].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check // prettier-ignore
                          type={type}
                          id={`default-${type}`}
                          label={`default ${type}`}
                        />

                        <Form.Check
                          disabled
                          type={type}
                          label={`disabled ${type}`}
                          id={`disabled-default-${type}`}
                        />
                      </div>
                    ))}
                  </Form>
                  <Form>
                    {["checkbox", "radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="1"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="2"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                        <Form.Check
                          inline
                          disabled
                          label="3 (disabled)"
                          type={type}
                          id={`inline-${type}-3`}
                        />
                      </div>
                    ))}
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={6} className="mt-lg-0 mt-sm-3">
              <Card className="mt-3">
                <Card.Header className="bg-primary text-white py-3">
                  Horizontal Form
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="2">
                        Email
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="email" placeholder="Enter email" />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Form.Label sm="3" column>Password</Form.Label>
                      <Col sm="9">
                        <Form.Control type="password" placeholder="Password" />
                      </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
              <Card className="mt-3">
                <Card.Header className="bg-primary text-white py-3">
                  General Elements
                </Card.Header>
                <Card.Body>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Row>
                    <Col sm="6">
                      <Form.Control
                        type="text"
                        readOnly
                        placeholder="Readonly input here..."
                      />
                    </Col>
                    <Col sm="6">
                      <Form.Control
                        plaintext
                        readOnly
                        defaultValue="Readonly plaintext here..."
                      />
                    </Col>
                  </Row>
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Disabled input"
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                  <br />
                  <FloatingLabel
                    controlId="floatingInput"
                    label="floating element"
                    className="mb-3"
                  >
                    <Form.Control type="email" placeholder="floating element" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingTextarea"
                    label="Comments"
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Card.Body>
              </Card>
              <Card className="mt-3">
                <Card.Header className="bg-primary text-white py-3">
                  File Inputs
                </Card.Header>
                <Card.Body>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                  <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Multiple files input example</Form.Label>
                    <Form.Control type="file" size="lg" multiple />
                  </Form.Group>
                </Card.Body>
              </Card>

              <Card className="mt-3">
                <Card.Header className="bg-primary text-white py-3">
                  Select
                </Card.Header>
                <Card.Body>
                  <Form.Select size="lg">
                    <option>Large select</option>
                  </Form.Select>
                  <br />
                  <Form.Select>
                    <option>Default select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <br />
                  <Form.Select size="sm">
                    <option>Small select</option>
                  </Form.Select>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </PageWrapper>
  );
}
