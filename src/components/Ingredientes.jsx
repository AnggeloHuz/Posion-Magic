import { useContext } from "react";
import Swal from "sweetalert2";
import { Contexto } from "../context/Context";
import Ingrediente from "./productos/Ingrediente";

function Ingredientes() {

    const { ingredientes } = useContext(Contexto)

    return (
        <>
            <section id="buscar" className="h-auto w-full text-center flex justify-center items-center p-4 xl:p-20">
                <div className="w-full h-full bg-black rounded-xl border-[3px] border-indigo-400">
                    <h1
                        className="text-4xl p-16 text-indigo-400 "
                    >Listado de Ingredientes</h1>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg  m-8">
                        <table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Nombre
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Cantidad
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
                                {ingredientes.map((ingrediente) => (
                                    <Ingrediente
                                        key={ingrediente.id}
                                        datos={ingrediente} />
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ingredientes