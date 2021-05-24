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
        name_contact: vecino.name_contact,
        numb_contact: vecino.numb_contact,
        name_contact2: vecino.name_contact2,
        numb_contact2: vecino.numb_contact2,
    });
    const { id_veci, direccion, name_contact, numb_contact, name_contact2, numb_contact2 } = datos;

    return (
        <tr>
            <td>{id_veci}</td>
            <td>{direccion}</td>
            <td>{name_contact}</td>
            <td>{numb_contact}</td>
            <td>{name_contact2}</td>
            <td>{numb_contact2}</td>
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
    );
};