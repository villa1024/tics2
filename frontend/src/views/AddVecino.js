import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function AddVecino() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Añadir Vecino</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="3">
                      <FormGroup>
                        <label>Dirección</label>
                        <Input
                          defaultValue=""
                          placeholder="Dirección"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="3">
                      <FormGroup>
                        <label>Número de Casa</label>
                        <Input
                          defaultValue=""
                          placeholder="Número"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Nombre del Contacto</label>
                        <Input
                          defaultValue=""
                          placeholder="Nombre"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="3">
                      <FormGroup>
                        <label>Número Telefónico del Contacto</label>
                        <Input
                          defaultValue=""
                          placeholder="Número Telefónico"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="2">
                      <FormGroup>
                        <label>Identificación</label>
                        <Input
                          defaultValue=""
                          placeholder="ID"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Enviar
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AddVecino;
