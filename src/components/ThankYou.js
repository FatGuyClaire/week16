import React from "react";
import { Row, Col } from "react-bootstrap";
import logo2 from "../images/Logo2.jpg";

// I created the Thank You function, which is the destination clients are taken after submitting the Contact Form,
// to show that their submission was successful.  
function ThankYou() {
    
    return (
      <>
        <Row>
          <Col>
            <h1>Thank you for contacting Kool Katz!</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={logo2} alt="Kool Katz Logo" style={{width:'600px'}} className="pb-5"/>
          </Col>
        </Row>


        <Row>
          <Col>
            <p>
            Shanne at (702)292-7010 or Email KoolKatz@cox.net
            </p>
          </Col>
        </Row>
      </>
    );
  }


export default ThankYou;