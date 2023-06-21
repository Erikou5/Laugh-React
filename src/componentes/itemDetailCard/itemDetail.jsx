import './itemDetail.css'



export const ItemDetail = ({id,nombre,img,alt,stock,precio}) =>{
    return(
        <>
        <h2>{nombre}</h2>
        <div className="containFichas" >
            
            <div className="fichaDetalle">
            <img src={img} alt={alt} />
            <h2>Precio: {precio} $</h2>
            <p>Stock: {stock}</p>
            <small>ID: {id}</small>
            </div>
        </div>
        </>

    )
}

export default ItemDetail