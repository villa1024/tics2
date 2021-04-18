import React, {useState} from "react";

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

  const [datos, setDatos] = useState({
    id: '',
    password: ''
  })

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  const enviarDatos = async event => {
    event.preventDefault();
    console.log(datos)
    try {
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'aplication/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      }
      
      let res = await fetch('http://localhost:4000/api/auth', config)
      let json = await res.json()

      console.log(json)
    } catch (error) {

    }
  }

  return (
    <>
      <div className="content">
      <Form onSubmit={enviarDatos}>
          <Col className="ml-auto mr-auto mt-5 text-center" md="4">
            <Card>
              <CardHeader>
                <h2 className="title">Iniciar Sesión</h2>
              </CardHeader>
              <CardBody>
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="10">
                      <FormGroup>
                        <label>Nombre de Usuario</label>
                        <Input
                          defaultValue=""
                          placeholder="Usuario"
                          type="text"
                          name="id"
                          onChange={handleInputChange}
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
                          type="password"
                          name="password"
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
              </CardBody>
              <CardFooter>
                <Button className="btn-primary" color="primary" type="submit">
                  Enviar
                </Button>
              </CardFooter>
            </Card>
          </Col>
          </Form>
      </div>
    </>
  );
}

export default Login;
