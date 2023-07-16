import './itemCounter.css'

const ItemCounter = ({max,setCantidad,cantidad, handleAgregar}) => {
    
    const handleRestar = ()=> {
        cantidad > 1 && setCantidad (cantidad -1)
    }
    
    const handleSumar = () => {
        cantidad < max && setCantidad( cantidad + 1 )
    }

    return (
        
        <div>
        <button onClick={handleRestar} className="btn btn-secondary" disabled={cantidad === 1}> - </button>

        <span>{cantidad}</span>
        
        <button onClick={handleSumar} className="btn btn-secondary" disabled = {cantidad === max}> + </button>

        <button onClick={handleAgregar} className="btn btn-primary agregar" >Agregar</button>

        </div>
    )
}

export default ItemCounter