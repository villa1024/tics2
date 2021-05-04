import React, { useState } from "react";
import {
    Button,
} from "reactstrap";

import ActualizarVeci from './ActualizarVeci';

export const ListVecinoFila = ({ vecino, handleInputDelete, fetchVecinos, setVecinos }) => {
    //hook vecino, para actualizar datos

    const [datos] = useState({
        id_veci: vecino.id_veci,
        direccion: vecino.direccion,
        numero: vecino.numero,
        nom_numero: vecino.nom_numero,
        numero0: vecino.numero0,
        nom_numero0: vecino.nom_numero0,
    });
    const { id_veci, direccion, numero, nom_numero, numero0, nom_numero0 } = datos;

    return (
        <tr>
            <td>{id_veci}</td>
            <td>{direccion}</td>
            <td>{numero}</td>
            <td>{nom_numero}</td>
            <td>{numero0}</td>
            <td>{nom_numero0}</td>
            <td className="text-center">
                <ActualizarVeci
                    info={datos}
                    fetchVecinos={fetchVecinos}
                    setVecinos={setVecinos}
                />
            </td>
            <td className="text-center">
                <Button
                    className="btn-fill"
                    color="danger"
                    type="submit"
                    onClick={() => handleInputDelete(id_veci)}
                >
                    Eliminar
                </Button>
            </td>
        </tr>
    )
};