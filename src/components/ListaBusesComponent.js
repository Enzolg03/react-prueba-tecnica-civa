import React, { useEffect, useState } from "react";

export const ListaBusesComponent = () => {

    const [buses,setBuses] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/buses")
        .then(response => response.json())
            .then(data => setBuses(data));
        
    },[])

    return (
        <div className="container">
            <h2 className="text-center mb-3">Lista de Buses</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>ID</th>
                    <th>NRO BUS</th>
                    <th>PLACA</th>
                    <th>FECHA_CREACION</th>
                    <th>CARACTERISTICAS</th>
                    <th>MARCA</th>
                    <th>ACTIVO</th>
                </thead>
                <tbody>
                    {
                        buses.map(
                            bus =>
                                <tr key={ bus.idbus}>
                                    <td>{ bus.idbus }</td>
                                    <td>{ bus.nroBus }</td>
                                    <td>{ bus.placa }</td>
                                    <td>{ bus.fechaCreacion }</td>
                                    <td>{ bus.caracteristicas }</td>
                                    <td >{ bus.marca.nommarca }</td>
                                    <td>{ bus.activo ? "Sí" : "No" }</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}