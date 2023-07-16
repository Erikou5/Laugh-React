import { useContext } from "react"
import { CarritoContext } from "../../context/carritoContext"
import "./CarritoWidget.css"


export const CarritoWidget = () => {

    const {totalCantidadCarrito} = useContext(CarritoContext)

    return(
        <button type="button" className="d-flex btn btn-primary botonCarrito" data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        <i className="fa-solid fa-cart-shopping ml-5" wheight="10px"></i>
        <div>{totalCantidadCarrito()}</div>
        </button>
    )
}