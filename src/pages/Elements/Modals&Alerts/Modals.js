import { useState } from "react";

import{Button,ButtonGroup,Form,Modal} from '../../../components/bootstrapComponent'
export default function ModalsContent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showFormModal, setShowFormModal] = useState(false);

  const handleCloseFormModal = () => setShowFormModal(false);
  const handleShowFormModal = () => setShowFormModal(true);

  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const [showFullscreen, setShowFullscreen] = useState(false);

  function handleShowFullscreen() {
    setShowFullscreen(true);
  }
  return (
    <>
      <ButtonGroup aria-label="Basic example" className="gap-3 d-flex flex-wrap">
        <Button variant="primary" onClick={handleShow}>
          Basic Modal
        </Button>
        <Button variant="primary" onClick={handleShowFormModal}>
          Vertical center form modal
        </Button>

        <Button onClick={() => setSmShow(true)}>
          Small modal
        </Button>
        <Button onClick={() => setLgShow(true)}>Large modal</Button>
        <Button onClick={() => handleShowFullscreen()}>
          Full Screen
        </Button>
      </ButtonGroup>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      <>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={showFormModal}
          onClick={handleCloseFormModal}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseFormModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseFormModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      <>
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
      </>

      <>
        <Modal
          show={showFullscreen}
          fullscreen={showFullscreen}
          onClick={() => setShowFullscreen(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body content</Modal.Body>
        </Modal>
      </>
    </>
  );
}
