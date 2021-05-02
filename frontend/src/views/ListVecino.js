import React, { useEffect, useState } from "react";

import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
// reactstrap components
import {
  Button,
  CardTitle,
  Table,
} from "reactstrap";

import { ListVecinoFila } from "./ListVecinoFila";

function ListVecino() {

  const [vecinos, setVecinos] = useState([]);

  // Consulta a la API
  useEffect(() => {
    let request = new Request('http://localhost:4000/api/vecino/getallvecinos', {
      method: 'GET',
      mode: 'cors',
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
      headers: {
        'x-token': localStorage.getItem('token') || ''
      }
    });
    fetch(request)
      .then(response => response.json())
      .then(dataJSON => {
        const { data } = dataJSON;
        setVecinos(data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  if (vecinos === undefined) return <h1 className="my-4 text-center bg-blue">CARGANDO VECINOS, POR FAVOR ESPERE...</h1>;

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Lista Vecinos</h5>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter">
                  <thead className="text-primary">
                    <tr>
                      <th>ID VECINO</th>
                      <th>Dirección</th>
                      <th>Numero Contacto 1</th>
                      <th>Nombre Contacto 1</th>
                      <th>Numero Contacto 2</th>
                      <th>Nombre Contacto 2</th>
                      <th className="text-center">Boton</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      vecinos.map(vecino => (
                        <ListVecinoFila
                          key={vecino.id_veci}
                          vecino={vecino}
                        />
                      ))
                    }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ListVecino;