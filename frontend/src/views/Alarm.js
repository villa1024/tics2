import React, { useState } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
// reactstrap components
import {
  Table,
  Button,
} from "reactstrap";

function Alarm(props) {

  const [alarmas, setAlarmas] = useState([]);

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
                      <th>ID ALARMA</th>
                      <th>ID VECINO</th>
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
                    <tr>
                      <td>1</td>
                      <td>LJ45</td>
                      <td>PAJARITOS #980</td>
                      <td>XAVIER</td>
                      <td>+56989898989</td>
                      <td>XAVIER</td>
                      <td>+56989898989</td>
                      <td>HOY</td>
                      <td>ACTIVA</td>
                      <td className="text-center">
                        <Button
                          className="btn-fill"
                          color="success"
                          type="submit"
                        >
                          CONFIRMAR
                      </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>LJ45</td>
                      <td>PAJARITOS #980</td>
                      <td>XAVIER</td>
                      <td>+56989898989</td>
                      <td>XAVIER</td>
                      <td>+56989898989</td>
                      <td>HOY</td>
                      <td>ACTIVA</td>
                      <td className="text-center">
                        <Button
                          className="btn-fill"
                          color="success"
                          type="submit"
                        >
                          CONFIRMAR
                      </Button>
                      </td>
                    </tr>
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