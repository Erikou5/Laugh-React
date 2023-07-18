import './carrito.css'
import { CarritoProducts } from '../carritoProducts/carritoProducts'
import { useContext } from 'react'
import { CarritoContext } from '../../context/carritoContext'
import { CarritoWidget } from '../carritoWidget/carritoWidget'
import { CarritoForm } from '../carritoForm/carritoForm'

export const Carrito = () => {

    const {totalCarrito, vaciarCarrito, carrito,finalizar, setFinalizar,pagar} = useContext(CarritoContext)

    return (
        <div className="carrito">
            <CarritoWidget/>
            {/*  Modal  */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Tu carrito</h5>
                            <button 
                            onClick={() => 
                            setTimeout( () => {        // le puse tiempo nada mas para que no se vea el nuevo render mientras se cierra
                            if (finalizar){
                                setFinalizar(false)
                            }
                            }, 500)}
                            type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-wrap text-center carritoModal">
                            {
                                carrito.length === 0?             //condicionales para renderizar el contenido del carrito
                                <p>Su carrito esta vacio</p>
                                : finalizar?
                                <CarritoForm/>
                                :
                                <>
                                <CarritoProducts />
                                <hr />
                                <h5>Total : { totalCarrito() }</h5>
                                </>
                            }
                        </div>
                        <div className="d-flex justify-content-around">
                            {
                                finalizar?    //condicional para los botones
                                <>
                                {/* <button onClick={() => setFinalizar(false)} type="button" className="btn btn-secondary" >Volver</button>
                                <button onClick={pagar} type="submit" className="btn btn-primary" >Pagar</button> */}
                                </>
                                :
                                <>
                                <button onClick={vaciarCarrito} type="button" className="btn btn-secondary" 
                                disabled = {carrito.length === 0}>Vaciar carrito</button>       {/*deshabilito los botones si el carro esta vacio*/}
                                <button onClick={() => setFinalizar(true)} type="button" className="btn btn-primary" 
                                disabled = {carrito.length === 0}>Finalizar compra</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}