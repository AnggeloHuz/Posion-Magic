import FormularioPosiones from "./FormularioPosiones"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";
import FormularioIngredientes from "./formularios/FormularioIngredientes";

function Agregar(params) {
    return (
        <>
            <section className="min-h-[75vh] h-auto w-full flex justify-center items-center p-4 xl:p-20">
                <Carousel className="w-[90%]">
                    <FormularioPosiones />
                    <FormularioIngredientes />
                </Carousel>
            </section>
        </>
    )
}

export default Agregar

