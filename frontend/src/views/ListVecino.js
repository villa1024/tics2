import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
// reactstrap components
import {
  Table,
} from "reactstrap";

import swal from 'sweetalert';

import { clienteAxios } from "helpers/axios";
import { ListVecinoFila } from "./ListVecinoFila";

function ListVecino() {

  const [vecinos, setVecinos] = useState([]);

  // Consulta a la API
  useEffect(() => {
    fetchVecinos();
  }, []);

  const fetchVecinos = () => {
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
  };

  const handleInputDelete = (id_veci) => {
    swal("Seguro que desea eliminar al vecino? Esta acción no puede revertirse...", {
      buttons: {
        cancel: "Cancelar",
        aceptar: {
          text: "Borrar",
          value: "borrar",
        },
      },
    })
      .then(async (value) => {
        switch (value) {
          case "borrar":
            // codigo para borrar
            try {
              const resp = await clienteAxios.delete(`/api/vecino/deleteVecino/${id_veci}`, {
                headers: {
                  'x-token': localStorage.getItem('token')
                }
              });
              swal("Bien!", "El vecino ha sido borrado", "success");
              setVecinos(vecinos.filter(vecino => vecino.id_veci !== id_veci));
            } catch (error) {
              swal("Error!", "Al parecer no tiene privilegios", "error");
            }
            break;
          default:
            swal("Cancelado!");
        }
      });
    // console.log(id_veci);
    // const { data } = await clienteAxios.post('/api/vecino/crearVecino', {}, {
    //   headers: {
    //     'x-token': localStorage.getItem('token') || ''
    //   }
    // });
    // if (data.ok) {
    //   swal("Perfecto!", 'El vecino ha sido eliminado', "success");
    // }
  };

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
                      <th>Nombre Contacto 1</th>
                      <th>Numero Contacto 1</th>
                      <th>Nombre Contacto 2</th>
                      <th>Numero Contacto 2</th>
                      <th className="text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      vecinos.map(vecino => (
                        <ListVecinoFila
                          key={vecino.id_veci}
                          vecino={vecino}
                          handleInputDelete={handleInputDelete}
                          fetchVecinos={fetchVecinos}
                          setVecinos={setVecinos}
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