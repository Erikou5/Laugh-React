import './itemDetail.css'
import ItemCounter from '../itemCounter/itemCounter'
import { useState } from "react"

export const ItemDetail = ({id,nombre,img,alt,stock,precio}) =>{

    const [cantidad, setCantidad] = useState(1)

    return(
        <>
        <h2>{nombre}</h2>
        <div className="containFichas" >
            
            <div className="fichaDetalle">
            <img src={img} alt={alt} />
            <h2>Precio: {precio} $</h2>
            <p>Stock: {stock}</p>
            <small>ID: {id}</small>

            <ItemCounter
            max={stock}
            cantidad={cantidad}
            setCantidad = {setCantidad}
            />
            </div>
            
        </div>
        </>

    )
}

export default ItemDetail