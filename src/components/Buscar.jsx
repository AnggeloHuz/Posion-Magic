import { useEffect, useState } from "react";
import React from "react";
import Swal from "sweetalert2";
import Posion from "./productos/Posion";

function Buscar() {
    const [categoria, setCategoria] = useState('');
    const [posiones, setPosiones] = useState([])

    function buscarPosiones(categoria) {
        Swal.fire({
            icon: 'info',
            title: 'Se estan cargando las posiciones',
            showConfirmButton: false,
            timer: 3000
        })
            .then((response) => {
                if (response.dismiss) {
                    fetch(`http://localhost:3000/posiones/${categoria}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            if (data.status === 200) {
                                setPosiones(data.data)
                                Swal.fire('Listado de Posiones', data.menssage, 'success')
                            } else if (data.status === 400) {
                                Swal.fire('Ocurrio un error', data.menssage, 'error')
                            }
                        })
                        .catch((error) => {
                            Swal.fire('Sin Respuesta', 'No esta activo el servidor', 'info')
                        });
                }
            })
    
    
    }

    return (
        <>
            <section id="buscar" className="h-auto w-full text-center flex justify-center items-center p-4 xl:p-20">
                <div className="w-full h-full bg-black rounded-xl border-[3px] border-indigo-400">
                    <h1
                        className="text-4xl p-16 text-indigo-400 "
                    >Buscar Posiones</h1>
                    <form className="max-w-sm px-8 flex w-[100%]">
                        <div className="relative ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-white left-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Ingresa la Categoria"
                                value={categoria}
                                onChange={e => {
                                    setCategoria(e.target.value)
                                }}
                                className="w-full py-3 pl-12 pr-4 text-white border-[2px] border-indigo-400 rounded-md outline-none bg-gray-700 focus:bg-gray-900 focus:border-indigo-900"
                            />
                        </div>
                        <button
                            onClick={e => {
                                e.preventDefault()
                                buscarPosiones(categoria)
                            }}
                            className="ml-4 bg-indigo-400 text-white active:bg-black font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        > Search</button>
                    </form>
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
                                {posiones.map((posion) => (
                                        <Posion
                                            key={posion.id}
                                            datos={posion} />
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Buscar