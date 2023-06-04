import { createContext, useEffect, useState } from "react";

export const Contexto = createContext()

export function ContextoProvider(props) {

    const [categorias, setCategorias] = useState({ data: [] });
    const [posiones, setPosiones] = useState({ data: [] });
    const [cambio, setCambio] = useState(true)

    useEffect(() => {
        cargarCategorias()
        cargarPosiones()
        console.log(categorias)
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
                    setPosiones(data);
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

    return (
        <Contexto.Provider value={{"categorias": categorias, "posiones": posiones, "cambio": {cambio, setCambio}}}>
            {props.children}
        </Contexto.Provider>
    )
}