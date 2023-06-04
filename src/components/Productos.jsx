import TablaPosiones from "./tables/TablaPosiones"

function Productos() {
    return (
        <>

            <section className="h-auto w-full text-center flex justify-center items-center p-4 xl:p-20">
                <div className="w-full h-full bg-black rounded-xl border-[3px] border-indigo-400">
                    <h1 
                    className="text-4xl p-16 text-indigo-400 "
                    >Posiones de la Tienda</h1>
                    <TablaPosiones />
                </div>
            </section>

        </>
    )
}

export default Productos