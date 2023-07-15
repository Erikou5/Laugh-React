import './carrito.css'
import { CarritoProducts } from '../carritoProducts/carritoProducts'
import { useContext } from 'react'
import { CarritoContext } from '../../context/carritoContext'

export const Carrito = () => {

    const {totalCarrito, vaciarCarrito, carrito} = useContext(CarritoContext)

    return (
        <div className="carrito">
            <button type="button" className="btn btn-primary botonCarrito" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <i className="fa-solid fa-cart-shopping ml-5" wheight="10px"></i>
            </button>
            {/* //<!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Tu carrito</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-wrap text-center carritoModal">
                            {
                                carrito.length === 0?
                                <p>Su carrito esta vacio</p>
                                : <CarritoProducts />
                            }
                            <hr />
                            <h5>Total : { totalCarrito() }</h5>

                        </div>
                        <div className="modal-footer d-flex justify-content-around" id="modalFooter">
                            <button onClick={vaciarCarrito} type="button" className="btn btn-secondary" >Vaciar carrito</button>
                            <button type="button" className="btn btn-primary" >Finalizar compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}