import ModalPosion from "../modals/ModalPosion"
import Swal from "sweetalert2";

function Posion({ datos }) {

    return (
        <>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 flex justify-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="h-[100px] w-[100px]" src={datos.imagen} alt="" />
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {datos.nombre}
                </th>
                <td class="px-6 py-4">
                {datos.categoria}
                </td>
                <td class="px-6 py-4">
                {datos.cantidad}
                </td>
                <td class="px-6 py-4">
                    ${datos.precio}
                </td>
                <td class="px-6 py-4">
                {datos.descripcion}
                </td>
                <td class="px-6 py-4">
                    <ModalPosion data={datos}/>
                    <button
                        className="ml-4 bg-red-800 text-white active:bg-black font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                            eliminarPosion(datos.id)
                        }}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    )
}

const eliminarPosion = (id) => {
    Swal.fire({
        title: "Advertencia",
        text: "Estas seguro de eliminar la Posión",
        icon: "warning",
        showDenyButton: true,
        denyButtonText: "NO",
        confirmButtonText: "SI"
    }).then(response => {
        if (response.isConfirmed) {
            fetch(`http://localhost:3000/posiones/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === 200) {
                        Swal.fire('Se ha Eliminado', data.menssagge, 'success')
                        .then((response) => {
                            if (response.isConfirmed) {
                                location.reload()
                            }
                        })
                    } else if (data.status === 404) {
                        Swal.fire('Ocurrio un error', data.menssagge, 'error')
                    }
                })
                .catch((error) => {
                    Swal.fire('Sin Respuesta', 'No esta activo el servidor', 'info');
                });
        } else if (response.isDenied) {
            Swal.fire('Ten cuidado', 'No vallas a eliminar un producto importante', 'info')
        }
    })
}

export default Posion