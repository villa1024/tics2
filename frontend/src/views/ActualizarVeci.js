/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Card,CardBody} from 'reactstrap';

import { clienteAxios } from "helpers/axios";
import swal from 'sweetalert';

const ActualizarVeci = (props) => {
  
  //hook vecino, para actualizar datos
  const [datos, setDatos] = useState({
    id_veci: props.datos.id_veci,
    direccion:props.datos.direccion,
    numero:props.datos.numero,
    nom_numero:props.datos.nom_numero,
    numero0:props.datos.numero0,
    nom_numero0:props.datos.nom_numero0,
  });
  //clase datos para recopilar datos del vecino
  const { id_veci, direccion, numero, nom_numero, numero0, nom_numero0 } = datos;

  //actualizar datos cuando se inserta informacion en el formulario
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  };

  //envia los datos a la api con axios.
  const enviarDatos = async e => {
    e.preventDefault();
    const { data } = await clienteAxios.post('localhost:4000/api/vecino/ActualizarVecino', datos);
    if (data.ok) {
      swal("Perfecto!", 'El vecino ha sido Actualizado!', "success");
    }
  };
  // cosas del modal
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}>Actualizar</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Actualizar Vecino</ModalHeader>
        <ModalBody>
            <Card>
            <CardBody>
                <Form onSubmit={enviarDatos}>
                    <FormGroup>
                    <Label for="exampleEmail">ID</Label>
                    <Input type="text" name="id" value={datos.id_veci} value={datos.id_veci} onChange={handleInputChange} readOnly/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleEmail">Direccion</Label>
                    <Input type="text" name="direccion" value={datos.direccion}  onChange={handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleEmail">Nombre del Contacto</Label>
                    <Input type="text" name="nom_numero" value={datos.nom_numero}  onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleEmail">Número Telefónico del Contacto</Label>
                    <Input type="text" name="numero" value={datos.numero}  onChange={handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleEmail">Nombre del Contacto 2</Label>
                    <Input type="text" name="nom_numero0" value={datos.nom_numero0}  onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleEmail">Número Telefónico del Contacto 2</Label>
                    <Input type="text" name="numero0" value={datos.numero0} value={numero0} onChange={handleInputChange}/>
                    </FormGroup>
                </Form>
            </CardBody>
            </Card>
            
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={enviarDatos}>Actualizar</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ActualizarVeci;