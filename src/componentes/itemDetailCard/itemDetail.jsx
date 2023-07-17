import './itemDetail.css'
import ItemCounter from '../itemCounter/itemCounter'
import { useContext, useState } from "react"
import { CarritoContext } from '../../context/carritoContext'
import { productoAñadido, sinStock } from '../../helpers/toastify'

export const ItemDetail = ({id,nombre,img,alt,stock,precio}) =>{
    
    const {agregarAlCarrito, isInCart, buscarElemento, actualizarCantidad} = useContext(CarritoContext) // llamo al contexto que necesito

    const [cantidad, setCantidad] = useState(1)
    
    const handleAgregar = () =>{
        const item = {
            id,
            nombre,
            img,
            alt,
            stock,
            precio,
            cantidad
        }

        if (isInCart (id)){                                      //esta en el carrito ?
            const productoEnCarrito = buscarElemento(id)            //creo ref a ese objeto
            
            if (cantidad + productoEnCarrito.cantidad <= stock){       //verifico que no pase la cantidad al stock si se agrega
                actualizarCantidad(id,cantidad)
                productoAñadido()
            }else {
                sinStock()
            }
        } else{
            agregarAlCarrito(item)
            productoAñadido()
        }
    }


    return(
        <>
        <h2>{nombre}</h2>
        <div className="containFichas" >
            
            <div className="fichaDetalle">
            <img src={img} alt={alt} />
            <h2>Precio: {precio} $</h2>
            <p>Stock: {stock}</p>
            <small>{alt}</small>

            <ItemCounter
            max={stock}
            cantidad={cantidad}
            setCantidad = {setCantidad}
            handleAgregar={handleAgregar}
            />
            </div>
            
        </div>
        </>

    )
}

export default ItemDetail