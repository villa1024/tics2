import React, { useState } from "react";
import {
    Button,
} from "reactstrap";

import ActualizarVeci from './ActualizarVeci';

export const ListVecinoFila = ({vecino}) => {
    //hook vecino, para actualizar datos

  const [datos, setDatos] = useState({
        id_veci: vecino.id_veci,
        direccion:vecino.direccion,
        numero:vecino.numero,
        nom_numero:vecino.nom_numero,
        numero0:vecino.numero0,
        nom_numero0:vecino. nom_numero0,
  });
  const editVecino= (vecino) =>{
      setDatos(
      )
  }
    return (
        <tr>
            <td>{vecino.id_veci}</td>
            <td>{vecino.direccion}</td>
            <td>{vecino.numero}</td>
            <td>{vecino.nom_numero}</td>
            <td>{vecino.numero0}</td>
            <td>{vecino.nom_numero0}</td>
            <td className="text-center">
                <ActualizarVeci
                datos={datos}
                ></ActualizarVeci>
            </td>
            <td className="text-center">
                <Button className="btn-fill" color="danger" type="submit">
                    Eliminar
                </Button>
            </td>
        </tr>
    )
}
