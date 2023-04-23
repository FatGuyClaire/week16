import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SongEdit = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // I created a controlled form. It will have an initial value and need to be updated on each keystroke
  // below will hold the state of each value based off of the initial value from the props
  const [title, setTitle] = useState(props.title);
  const [artist, setArtist] = useState(props.artist);

  // I created a function to pass the updated values back to the edit function then close the Modal
  const handleSave = (e) => {
    e.preventDefault();
    props.edit({ id: props.id, title, artist }).then(() => handleClose());
  };

  return (
    <>
      {/* I placed a Button to control the showing of the Modal */}
      <Button variant="outline-warning" size="sm" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose} className="text-black">
        <Modal.Header closeButton>
          <Modal.Title>Edit Song</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSave}>
          <Modal.Body>
            <Row>
              <Col>
                {/* the form controls values will be tied to their states, and on change will update the state */}
                <Form.Control
                  placeholder="Artist Name"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Song Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default SongEdit;
