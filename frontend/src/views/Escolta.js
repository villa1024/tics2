import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Escolta() {
  return (
    <>
      <div className="content">
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Solicitudes de Escolta</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Nombre</th>
                      <th>Dirección</th>
                      <th>Modalidad</th>
                      <th>Fecha</th>
                      <th>Hora</th>
                      <th>Estado</th>
                      <th className="text-center">Boton</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Diego Saavedra</td>
                      <td>Isla Portezuelo 123456789</td>
                      <td>Llegada</td>
                      <td>Sabado, 17 de abril 2021</td>
                      <td>23:34</td>
                      <td>Por Confirmar</td>
                      <td className="text-center">
                        <Button className="btn-fill" color="success" type="submit">
                          Confirmar
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Juanito Perez</td>
                      <td>Juan pepotes 456</td>
                      <td>Llegada</td>
                      <td>Domingo, 18 de abril 2021</td>
                      <td>22:11</td>
                      <td>Por Confirmar</td>
                      <td className="text-center">
                        <Button className="btn-fill" color="success" type="submit">
                          Confirmar
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
      </div>
    </>
  );
}

export default Escolta;
