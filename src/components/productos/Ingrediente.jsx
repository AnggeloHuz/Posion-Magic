import { useContext } from "react";
import { Contexto } from "../../context/Context";

function Ingrediente({ datos }) {

    const { eliminarIngrediente } = useContext(Contexto)

    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {datos.nombre}
                </th>
                <td className="px-6 py-4">
                {datos.cantidad}
                </td>
                <td className="px-6 py-4">
                {datos.descripcion}
                </td>
                <td className="px-6 py-4">
                    <button
                        className="ml-4 bg-red-800 text-white active:bg-black font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                            eliminarIngrediente(datos.id)
                        }}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    )
}

export default Ingrediente