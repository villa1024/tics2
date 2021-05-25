import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
// reactstrap components
import {
  Table,
  Button
} from "reactstrap";

import { AlarmFila } from "./AlarmFila";

function Alarm(props) {

  const { id } = useSelector(state => state.auth);

  const [alarmas, setAlarmas] = useState([]);

  // Consulta a la API
  useEffect(() => {
    fetchAlarmas();
  }, []);

  const fetchAlarmas = () => {
    let request = new Request('http://localhost:4000/api/alarma/getAlarmas', {
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
        setAlarmas(data);
      })
      .catch(err => {
        console.error(err);
      })
  };

  if (alarmas === undefined) return <h1 className="my-4 text-center bg-blue">CARGANDO ALARMAS, POR FAVOR ESPERE...</h1>;

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <h4 className="title"><i className="fas fa-user"></i> ID GUARDIA: {id}</h4>
            <Card>
              <CardBody>
                <button
                  type="button"
                  className="btn btn-success btn-lg btn-block mb-3"
                  onClick={fetchAlarmas}
                >
                  RECARGAR ALARMAS
                </button>
                <Table className="tablesorter table-responsive">
                  <thead className="text-primary">
                    <tr>
                      <th>ID ALARMA</th>
                      <th>ID VECINO</th>
                      <th>ID GUARDIA</th>
                      <th>DIRECCIÓN</th>
                      <th>NOMBRE CONTACTO 1</th>
                      <th>NUMERO CONTACTO 1</th>
                      <th>NOMBRE CONTACTO 2</th>
                      <th>NUMERO CONTACTO 2</th>
                      <th>FECHA</th>
                      <th>ESTADO</th>
                      <th className="text-center">ACCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      alarmas.map(alarma => (
                        <AlarmFila
                          key={alarma.id_veci}
                          alarma={alarma}
                          fetchAlarmas={fetchAlarmas}
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

export default Alarm;