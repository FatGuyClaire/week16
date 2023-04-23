import React from "react";
import { Row, Col } from "react-bootstrap";
import logo2 from "../images/Logo2.jpg";

function Services() {
    return (
      <>
        <Row>
          <Col>
            <h1>Services Offered</h1>
          </Col>
        </Row>
        <Row >
          <Col>
            <img src={logo2} alt="Kool Katz Logo" style={{width:'600px'}} className="pb-5"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="pb-5">
            Kool Katz DJ and Karaoke has been in business since 2008. We are a professional DJ 
            and KJ service dedicated to making sure your event is worry free and all that you 
            dreamed it would be. Whether it's your wedding, birthday, Christmas party, Halloween 
            party, Quinceanera, or retirement party there is no job too small or too big for our 
            service. We offer our services for a very low price for what you get. We come complete 
            with all the equipment, basic dance lighting, and an MC for one low price. Many 
            companies will charge extra for dance lighting and someone to MC your event. We are 
            licensed and insured which most venues will require. When you hire Kool Katz you get the 
            whole package! MC for the event - Basic Lighting - No set up fee - Choice of music and  
            Reliable professional service that is licensed and insured.
            </p>
          </Col>
        </Row>
        <div className="text-start">
        <Row>
          <Col>
            <p>
<h5>MC</h5>
A professional DJ will MC your event. We know how to interact with your guests to make 
        your party a memorable celebration. We coordinate with the event manager, caterer, and 
        Photographer to insure that your event runs smoothly.
            </p>
          </Col>
        </Row>
        <Row>
        <Col>
          <p>
          <h5>Lighting</h5>
          Basic lighting is provided (No Extra Charge) to add fun and energy to your party.
          </p>
        </Col>
      </Row>
      <Row>
      <Col>
        <p>
        <h5>Music</h5>
        We provide the music for your event based on the initial consultation we have with you and 
success of the music that we play that keeps the dance floor packed. We have all genres of 
music; Oldies, Rock-n-Roll, Hip Hop, Pop, Old School, Salsa, Country, Motown, Steppin, Reggae, 
Disco, R&B, and Dance/Electro.
        </p>
      </Col>
    </Row>
    <Row>
    <Col>
      <p>
      <h5>Setup</h5>
      We do not charge for the time it takes to set up or tear down the equipment as long as we have 
access to the venue within one hour of the start time of the event and no longer than thirty minutes 
after the event.
      </p>
    </Col>
  </Row>
  <Row>
  <Col>
    <p>
    <h5>Service</h5>
    We provide a professional DJ service with a free consultation.
    </p>
  </Col>
</Row>
</div>
      </>
    );
  }
  
  export default Services;