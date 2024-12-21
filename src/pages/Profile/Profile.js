import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Modal,
  Row,
} from "../../components/bootstrapComponent";
import "./Profile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faEnvelope,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import PageWrapper from "../../components/PageWrapper";
export default function Profile() {
  const [showFormModal, setShowFormModal] = useState(false);

  const handleCloseFormModal = () => setShowFormModal(false);
  const handleShowFormModal = () => setShowFormModal(true);
  return (
    <PageWrapper title="Profile">
      <div className="p-lg-4">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between my-3">
            <h3>Profile</h3>
          </div>
          <Row className=" my-3">
            <Col xs={12} md={12} lg={12} className="mt-lg-0 mt-sm-3">
              <Card className="mt-3">
                <Card.Header className="profile position-relative">
                  <Form>
                    <div className="mb-3 img-preview position-absolute">
                      <label
                        htmlFor="formFile"
                        className="form-label position-relative"
                      >
                        <img
                          src={require(`../../assets/Admin/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png`)}
                          alt="Preview"
                          className="img-thumbnail"
                          style={{ maxWidth: "100%", height: "auto" }}
                        />
                        <div className="position-absolute icon">
                          <FontAwesomeIcon icon={faCamera} />
                        </div>
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        accept="image/*"
                        /* onChange={handleImageChange} */
                      />
                    </div>
                  </Form>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex justify-content-between my-5">
                    <div className="col-10">
                      <h4>Fatma Ahmad</h4>
                      <p>El Mansoura , Egypt</p>
                      <p>
                        <span>Age : 27</span> | <span>Gender : Female</span>
                      </p>
                      <Container fluid>
                        <Row className="mb-3">
                          <Col xs={5} md={6} lg={3}>
                            <FontAwesomeIcon icon={faUser} className="me-2" />
                            Role :
                          </Col>
                          <Col xs={7} md={6} lg={9}>
                            Admin
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col xs={5} md={6} lg={3}>
                            <FontAwesomeIcon
                              icon={faEnvelope}
                              className="me-2"
                            />
                            Email :
                          </Col>
                          <Col xs={7} md={6} lg={9}>
                            fatma.a.elsaadawy@gmail.com
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col xs={5} md={6} lg={3}>
                            <FontAwesomeIcon icon={faPhone} className="me-2" />
                            Contact :
                          </Col>
                          <Col xs={7} md={6} lg={9}>
                            +20 011 5328 0679
                          </Col>
                        </Row>
                      </Container>
                    </div>
                    <div>
                      <Button variant="primary" onClick={handleShowFormModal}>
                        Edit
                      </Button>

                      <Modal
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={showFormModal}
                        onHide={handleShowFormModal}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id="contained-modal-title-vcenter">
                            Edit Profile
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Name"
                              className="mb-3"
                            >
                              <Form.Control type="text" placeholder="Name" />
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Email"
                              className="mb-3"
                            >
                              <Form.Control type="email" placeholder="Email" />
                            </FloatingLabel>
                            <Row className="mb-3">
                              <Col sm="6">
                                <Form.Select>
                                  <option>Gender</option>
                                  <option value="1">Female</option>
                                  <option value="2">Male</option>
                                </Form.Select>
                              </Col>
                              <Col sm="6">
                                <Form.Select>
                                  <option>Role</option>
                                  <option value="1">Admin</option>
                                  <option value="2">User</option>
                                </Form.Select>
                              </Col>
                            </Row>

                            <FloatingLabel
                              controlId="floatingInput"
                              label="Contact"
                              className="mb-3"
                            >
                              <Form.Control type="text" placeholder="Contact" />
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Address"
                              className="mb-3"
                            >
                              <Form.Control
                                type="email"
                                placeholder="Address"
                              />
                            </FloatingLabel>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={handleCloseFormModal}
                          >
                            Close
                          </Button>
                          <Button
                            variant="primary"
                            onClick={handleCloseFormModal}
                          >
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className=" my-3">
            <Col xs={12} md={12} lg={12} className="mt-lg-0 mt-sm-3">
              <Card className="mt-3">
                <Card.Header className="bg-primary text-white pt-3">
                  Change Password
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword1"
                    >
                      <Form.Label column sm="2">
                        Current Password
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="password" placeholder="Password" />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword2"
                    >
                      <Form.Label column sm="2">
                        New Password
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="password"
                          placeholder="New Password"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword3"
                    >
                      <Form.Label column sm="2">
                        Confirm Password
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
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
