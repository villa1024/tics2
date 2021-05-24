import React, { useState } from "react";
import swal from 'sweetalert';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

import { clienteAxios } from "helpers/axios";

function AddVecino() {

  const [datos, setDatos] = useState({
    id_veci: '',
    direccion: '',
    name_contact: '',
    numb_contact: '',
    name_contact2: '',
    numb_contact2: '',
  });
  const { id_veci, direccion, name_contact, numb_contact, name_contact2, numb_contact2 } = datos;

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  };

  const enviarDatos = async e => {
    e.preventDefault();
    console.log(datos)
    if (id_veci === '') {
      console.log('id vacio');
      return swal("Error!", 'El campo Identificación no debe estar vacio', "error");
    }
    try {
      const { data } = await clienteAxios.post('/api/vecino/crearVecino', datos, {
        headers: {
          'x-token': localStorage.getItem('token') || ''
        }
      });
      if (data.ok) {
        swal("Perfecto!", data.msg, "success");
      }
      setDatos({
        id_veci: '',
        direccion: '',
        name_contact: '',
        numb_contact: '',
        name_contact2: '',
        numb_contact2: '',
      });
    } catch (error) {
      swal("Error!", 'No ha sido posible ingresar al vecino, pruebe cambiando la Identificación', "error");
      console.log('No ha sido posible ingresar al vecino, pruebe cambiando la Identificación');
    }
  };

  return (
    <>
      <div className="content">
        <Form onSubmit={enviarDatos}>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">Añadir Vecino</h5>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="pr-md-1" md="2">
                      <FormGroup>
                        <label>Identificación</label>
                        <Input
                          placeholder="ID"
                          type="text"
                          name="id_veci"
                          value={id_veci}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="3">
                      <FormGroup>
                        <label>Dirección</label>
                        <Input
                          placeholder="Dirección"
                          type="text"
                          name="direccion"
                          value={direccion}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-md-1" md="3">
                      <FormGroup>
                        <label>Número Telefónico del Contacto 1</label>
                        <Input
                          placeholder="Número Telefónico"
                          type="text"
                          name="numb_contact"
                          value={numb_contact}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Nombre del Contacto</label>
                        <Input
                          placeholder="Nombre"
                          type="text"
                          name="name_contact"
                          value={name_contact}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-md-1" md="3">
                      <FormGroup>
                        <label>Número Telefónico del Contacto 2</label>
                        <Input
                          placeholder="Número Telefónico"
                          type="text"
                          name="numb_contact2"
                          value={numb_contact2}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Nombre del Contacto 2</label>
                        <Input
                          placeholder="Nombre"
                          type="text"
                          name="name_contact2"
                          value={name_contact2}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Enviar
                </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default AddVecino;
