import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SongAdd = (props) => {

  // I initialized the modal to be hidden using state hook, all song actions will utilise Modals
  const [show, setShow] = useState(false);

  // I used arrow functions to handle simple state changes between true and false
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // I created a function to gather song data and pass it to the addSong function from the SongList then close the Modal
  const handleAdd = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    props.add(Object.fromEntries(formData)).then(() => handleClose());
  };

  return (
    <>
      {/* I placed a Button to control the showing of the Modal */}
      <Button variant="outline-success" size="sm" onClick={handleShow}>
        Add Song
      </Button>
      <Modal show={show} onHide={handleClose} className="text-black">
        <Modal.Header closeButton>
          <Modal.Title>Add Song</Modal.Title>
        </Modal.Header>
        {/* instead of triggering on the button click, I utilized the Form Submit event to trigger saving data */}
        <Form onSubmit={handleAdd}>
          <Modal.Body>
            <Row>
              <Col>
                <Form.Control name="artist" placeholder="Artist Name" />
              </Col>
              <Col>
                <Form.Control name="title" placeholder="Song Title" />
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="outline-primary">
              Add Song
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default SongAdd;
