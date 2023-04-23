import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import acesLogo from "../images/AA-Badge-MASTER-Revised-copy.png";
import bigDogsLogo from "../images/big-dogs-brewing-company-logo-4.png";
import shakespearesLogo from "../images/Shakespeare's logo.jpg";

function Events() {
    return (
      <>
        <Row>
          <Col>
          <h1>Karaoke Events</h1>
          </Col>
        </Row>
<Row>
    <Col>
    <Table hover size="sm" variant="dark" className="w-md-75 mx-auto mb-5">
    <tbody>
                <tr>
                  <td>Tuesdays</td>
                  <td>Big Dogs Brewing</td>
                  <td class="text-right">7pm - 10pm</td>
                </tr>
                <tr>
                  <td>Wednesdays</td>
                  <td>Aces and Ales - Tenaya</td>
                  <td class="text-right">9pm - 1am</td>
                </tr>
                <tr>
                  <td>Thursdays</td>
                  <td>Aces and Ales - Nellis</td>
                  <td class="text-right">9pm - 1am</td>
                </tr>
                <tr>
                  <td>Fridays</td>
                  <td>Shakespeare's</td>
                  <td class="text-right">9pm - 12am</td>
                </tr>
              </tbody>
              </Table>
              </Col>
</Row>


        <Row className="d-md-flex justify-content-between">
          <Col md={3}>
          <img src={bigDogsLogo} className="img-fluid" alt="Big Dogs Logo" style={{width:'230px'}}/>
          </Col>
          <Col md={3}>
            <img src={acesLogo} className="img-fluid" alt="Aces and Ales Logo" style={{width:'230px'}} />
            </Col>
            <Col md={3}>
            <img src={shakespearesLogo} className="img-fluid" alt="Shakespeare's Logo" style={{width:'230px'}}/>
          </Col>
</Row>
      </>
    );
  }


export default Events;