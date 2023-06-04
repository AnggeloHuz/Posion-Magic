import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const Contexto = createContext()

export function ContextoProvider(props) {

    const [categorias, setCategorias] = useState({ data: [] });
    const [posiones, setPosiones] = useState([]);
    const [ingredientes, setIngredientes] = useState([]);
    const [cambio, setCambio] = useState(true)

    useEffect(() => {
        cargarCategorias()
        cargarPosiones()
        cargarIngredientes()
    }, [])

    function cargarPosiones() {
        fetch("http://localhost:3000/posiones", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    setPosiones(data.data);
                }
            })
            .catch((error) => {
                console.error(error)
            });
    }

    function cargarCategorias() {
        fetch("http://localhost:3000/categorias", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    setCategorias(data);
                }
            })
            .catch((error) => {
                console.error(error)
            });
    }

    function cargarIngredientes() {
        fetch("http://localhost:3000/ingredientes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    setIngredientes(data.data);
                }
            })
            .catch((error) => {
                console.error(error)
            });
    }

    function crearPosion() {
        cargarPosiones()
    }

    function agregarIngrediente() {
        cargarIngredientes()
    }

    function eliminarIngrediente(id) {
        Swal.fire({
            title: "Advertencia",
            text: "Estas seguro de eliminar la Posión",
            icon: "warning",
            showDenyButton: true,
            denyButtonText: "NO",
            confirmButtonText: "SI"
        }).then(response => {
            if (response.isConfirmed) {
                fetch(`http://localhost:3000/ingredientes/delete/${id}`, {
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
                Swal.fire('Ten cuidado', 'No vallas a eliminar un Ingrediente importante', 'info')
            }
        })
    }

    return (
        <Contexto.Provider value={{
            "categorias": categorias, 
            "posiones": posiones, 
            "ingredientes": ingredientes,  
            "cambio": {cambio, setCambio},
            crearPosion: crearPosion,
            agregarIngrediente: agregarIngrediente,
            eliminarIngrediente: eliminarIngrediente
            }}>
            {props.children}
        </Contexto.Provider>
    )
}