import { Contexto } from "../../context/Context";
import { useState, useContext } from "react";
import Posion from "../productos/Posion";

function TablaPosiones() {

    const Context = useContext(Contexto)

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg  m-8">
            <table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Imgaen
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Categoria
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Cantidad
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Precio
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Descripcion
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Context.posiones.data.map((posion) => (
                        <Posion
                            key={posion.id}
                            datos={posion} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TablaPosiones