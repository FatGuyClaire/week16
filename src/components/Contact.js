import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import logo2 from "../images/Logo2.jpg";
import { useNavigate } from "react-router-dom";

// I created the Contact function, which is my Contact page and holds my Contact Form. Where this changed from earlier projects  
// is that I used router hooks to direct where the client goes after submitting the form, which is the Thank You page. 
function Contact() {
    const navigate=useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const message = {};
        for (const input of event.target) {
          if (input.id) {
            message[input.id] = input.value;
          }
        }
        message.date = new Date().toLocaleDateString("en-US");
        console.log(message);
        navigate('/thank-you');
      }
    return (
      <>
        <Row>
          <Col>
            <h1>Contact</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={logo2} alt="Kool Katz Logo" style={{width:'600px'}} className="pb-5"/>
          </Col>
        </Row>

        <Form onSubmit={handleFormSubmit} className="w-md-50 mx-auto pb-3">
           
<Row>
          <Form.Group className="mb-3 col-6" controlId="firstName">
            <Form.Control
              type="text"
              placeholder="First Name"
              required={true}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-6" controlId="lastName">
            <Form.Control
              type="text"
              placeholder="Last Name"
              required={true}
            />
          </Form.Group>
</Row>
<Row>
          <Col>
          <Form.Group className="mb-3" controlId="phoneNumber">
            <Form.Control
              type="tel"
              placeholder="Phone Number"
              required={true}
            />
          </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              type="text"
              placeholder="Email"
              required={true}
            />
          </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form.Group className="mb-3" controlId="message">
            <Form.Control
              as="textarea"
              placeholder="Insert Message Here"
              required={true}
            />
          </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>

        <Row>
          <Col>

            <p>
            Shanne at (702) 292-7010 or Email KoolKatz@cox.net
            </p>
          </Col>
        </Row>
      </>
    );
  }


export default Contact;