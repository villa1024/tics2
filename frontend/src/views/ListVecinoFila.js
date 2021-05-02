import React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Col,
} from "reactstrap";

export const ListVecinoFila = ({vecino}) => {
    return (
        <tr>
            <td>{vecino.id_veci}</td>
            <td>{vecino.direccion}</td>
            <td>{vecino.numero}</td>
            <td>{vecino.nom_numero}</td>
            <td>{vecino.numero0}</td>
            <td>{vecino.nom_numero0}</td>
            <td className="text-center">
                <Button className="btn-fill" color="success" type="submit">
                    Editar
                </Button>
            </td>
            <td className="text-center">
                <Button className="btn-fill" color="danger" type="submit">
                    Eliminar
                </Button>
            </td>
        </tr>
    )
}
