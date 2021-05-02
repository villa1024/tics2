import React from "react";

import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function Alarm() {
  return (
  	<>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Alarmas</h5>
              </CardHeader>
              <CardBody>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Alarm;