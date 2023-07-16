import { useContext } from "react"
import { CarritoContext } from "../../context/carritoContext"
import "./carritoForm.css"

export const CarritoForm = () => {

    const { totalCarrito } = useContext(CarritoContext)
    return (
        <>
            <h5 className="card-title">Su total a pagar es de: {totalCarrito()} $</h5>
            <form className="carritoForm" action="" method="" enctype="">
                <div className="formLabel">
                    <label htmlFor="tarjeta">Tarjeta:</label>
                    <label htmlFor="nombre">Nombre y apellido:</label>
                    <label htmlFor="dni">Dni:</label>
                    <div>
                        <label htmlFor="vencimiento">Vencimento:</label>
                    </div>
                </div>
                <div className="formInput">
                    <input type="number" id="tarjeta" name="tarjeta" />
                    <input type="text" id="nombre" name="nombre" />
                    <input type="number" id="dni" name="dni" />
                    <input type="date" id="vencimiento" name="vencimiento" />
                </div>
            </form>
        </>
    )
}