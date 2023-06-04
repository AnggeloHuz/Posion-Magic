import { useState, useContext } from "react";
import Swal from "sweetalert2";
import { Contexto } from "../context/Context";

function FormularioPosiones() {
    
    const Context = useContext(Contexto)

    const [nombre, setNombre] = useState('');
    const [imagen, setImagen] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');

    const mensajeError = validacion(nombre, imagen, cantidad, precio, descripcion, categoria)

    function validacion(nombre, imagen, cantidad, precio, descripcion, categoria) {
        if (nombre.trim().length == 0) return "Error"
        if (imagen.trim().length == 0) return "Error"
        if (cantidad.trim().length == 0) return "Error"
        if (precio.trim().length == 0) return "Error"
        if (descripcion.trim().length == 0) return "Error"
        if (categoria.trim().length == 0) return "Error"

        return
    }

    function enviarDatos (nombre, imagen, cantidad, precio, descripcion, categoria){

        const posion = {
            nombre,
            imagen,
            cantidad,
            precio,
            descripcion,
            categoria
        }
    
        fetch("http://localhost:3000/posiones/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(posion),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    Swal.fire('Agregada la Posion', data.menssage, 'success')
                } else if (data.status === 400) {
                    Swal.fire('Ocurrio un error', data.menssage, 'error')
                }
            })
            .catch((error) => {
                Swal.fire('Sin Respuesta', 'No esta activo el servidor', 'info')
            });
    }

    return (
        <div className="w-full md:w-3/4 h-full p-8 xl:p-16 bg-black rounded-xl border-[3px] border-indigo-400">
            <form className="w-full h-full"
                onSubmit={e => {
                    e.preventDefault()
                    setNombre('');
                    setImagen('');
                    setCantidad('');
                    setPrecio('');
                    setDescripcion('');
                    setCategoria('');
                    enviarDatos(nombre, imagen, cantidad, precio, descripcion, categoria);
                }}>
                <h1 className="text-indigo-400 text-4xl text-center mb-12">Agregar Posiones</h1>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text"
                        name="nombre"
                        id="nombre"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={nombre}
                        onChange={e => { setNombre(e.target.value) }}
                        required />
                    <label htmlFor="nombre"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Nombre</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text"
                        name="descripcion"
                        id="descripcion"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={descripcion}
                        onChange={e => { setDescripcion(e.target.value) }}
                        required />

                    <label htmlFor="descripcion"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Descripción</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="url"
                        name="imagen"
                        id="imagen"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={imagen}
                        onChange={e => { setImagen(e.target.value) }}
                        required />
                    <label
                        htmlFor="imagen"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Imagen</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            min={0}
                            type="number"
                            name="precio"
                            id="precio"
                            value={precio}
                            onChange={e => { setPrecio(e.target.value) }}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label
                            htmlFor="precio"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Precio</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            min={0}
                            type="number"
                            name="cantidad"
                            id="cantidad"
                            value={cantidad}
                            onChange={e => { setCantidad(e.target.value) }}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label
                            htmlFor="cantidad"
                            className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Cantidad</label>
                    </div>
                </div>
                <div className="z-0 w-full mb-6 group">
                    <label htmlFor="categoria" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                    <select
                        id="categoria"
                        name="categoria"
                        onChange={e => { setCategoria(e.target.value) }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {Context.categorias.data.map((categoria) => (
                            <option value={categoria.nombre}
                                key={categoria.id}
                            >{categoria.nombre}</option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    disabled={mensajeError}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
            </form>
        </div>
    )
}

export default FormularioPosiones