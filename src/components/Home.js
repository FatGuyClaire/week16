import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../images/Logo.jpg";

// I created the Home function, which is my Home page. This was taken from earlier projects and redone in React-Bootstrap. 
// The Services and Events pages were also redone the same way, and will not be shown in this video. 
function Home() {
  return (
    <>
      <Row>
        <Col>
          <h1>Home</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={logo} alt="Kool Katz Logo" className="pb-5"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Kool Katz DJ and Karaoke Service has been serving the Las Vegas Area
            since 2008. We are dedicated to making sure your event is perfect in
            every way. We do both Large and small scale events.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Home;
