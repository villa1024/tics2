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

function Login() {
  return (
    <>
      <div className="content">
          <Col className="ml-auto mr-auto mt-5 text-center" md="4">
            <Card>
              <CardHeader>
                <h2 className="title">Iniciar Sesión</h2>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="10">
                      <FormGroup>
                        <label>Nombre de Usuario</label>
                        <Input
                          defaultValue=""
                          placeholder="Usuario"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="10">
                      <FormGroup>
                        <label>Contraseña</label>
                        <Input
                          defaultValue=""
                          placeholder="Contraseña"
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
      </div>
    </>
  );
}

export default Login;
