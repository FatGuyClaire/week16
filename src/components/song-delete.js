import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const SongDelete = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // I created a function to pass the song id to the remove function then close the Modal
  const handleRemove = () => {
    props.remove(props.id).then(() => handleClose());
  };

  const { title, artist } = props;
  return (
    <>
      {/* I placed a Button to control the showing of the Modal */}
      <Button variant="outline-danger" size="sm" onClick={handleShow}>
        Delete
      </Button>
      <Modal show={show} onHide={handleClose} className="text-black">
        <Modal.Header closeButton>
          <Modal.Title>Delete Song</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete {artist} - {title}?!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="outline-primary" onClick={handleRemove}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SongDelete;
