import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardBody, Row, Col } from "reactstrap";

// reactstrap components
import {
  Table,
} from "reactstrap";

import { ListVecinoFila } from "./ListVecinoFila";
import sound from '../audio/SonidoAlerta.mp3';

function ListVecino() {

  // Alarmas
  const [alarmas, setAlarmas] = useState([]);
  let api = true;
  const fetchAlarmas = () => {
    if (api) {
      console.log('consultando api en vista alarmas...');
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
    }
  };
  useEffect(() => {
    setInterval(() => {
      fetchAlarmas();
    }, 3000);
    return () => api = false;
  }, []);

  const { id } = useSelector(state => state.auth);

  const [vecinos, setVecinos] = useState([]);

  // Consulta a la API
  useEffect(() => {
    fetchVecinos();
  }, []);

  const fetchVecinos = () => {
    console.log('consultando vecinos...');
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

  // console.log(id_veci);
  // const { data } = await clienteAxios.post('/api/vecino/crearVecino', {}, {
  //   headers: {
  //     'x-token': localStorage.getItem('token') || ''
  //   }
  // });
  // if (data.ok) {
  //   swal("Perfecto!", 'El vecino ha sido eliminado', "success");
  // }

  if (vecinos === undefined) return <h1 className="my-4 text-center bg-blue">CARGANDO VECINOS, POR FAVOR ESPERE...</h1>;

  return (
    <>
      {
        (alarmas === undefined || alarmas.length !== 0)
          ? <audio src={sound} autoPlay loop></audio>
          : null
      }
      <div className="content">
        <Row>
          <Col md="12">
            <h4 className="title"><i className="fas fa-user"></i> ID GUARDIA: {id}</h4>
            <Card>
              <CardBody>
                {
                  (alarmas.length !== 0)
                    ? <div className="alert alert-danger text-center" role="alert">
                      USTED CONTIENE ALARMAS NUEVAS
                    </div>
                    : null
                }
                <Table className="tablesorter table-responsive">
                  <thead className="text-primary">
                    <tr>
                      <th>ID VECINO</th>
                      <th>Direcci??n</th>
                      <th>NOMBRE VECINO</th>
                      <th>TELEFONO VECINO</th>
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