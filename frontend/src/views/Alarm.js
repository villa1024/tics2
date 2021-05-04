import React from "react";

import { Card, CardBody, CardTitle, CardText, Button, Row ,Badge,FormGroup,Input,Label ,Col} from 'reactstrap';

function Alarm(pro) {
  return (
  	<>
      <div className="content">
        <Row>
        <Card style={{width: '30rem'}}>
        <CardBody outline color="danger">
            <CardTitle>Alarma 34343!                     
              <Badge color="danger">Recibido</Badge>
            </CardTitle>
            <CardText>  id:AGUI719</CardText>
            <CardText>  Direccion: las aguilas 719</CardText>
            <CardText>  Hora de activacion: 15:57 pm</CardText>
            <CardText>  Contactos <br></br>
            <ul>
                          <li> <strong>Nombre 1:</strong>  Pepejuan</li>
                          <li><strong>Telefono 1:</strong> +569676347463</li>
                          <li><strong>Nombre 2:</strong> Diego</li>
                          <li><strong>Telefono 2:</strong> +569676354321</li>
            </ul>
            </CardText>
            <FormGroup className="has-success">
              <Label for="success" className="control-label">Comentarios</Label>
              <Col><Input type="text" name="success" id="success"/></Col>
              <Col><Button color="success">Success</Button></Col>
          </FormGroup>
        </CardBody>
      </Card>
        </Row>
      </div>
    </>
  );
}

export default Alarm;