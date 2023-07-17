import { useContext } from "react"
import { CarritoContext } from '../../context/carritoContext'
import "./CarritoProducts.css"


export const CarritoProducts = () => {

    const { carrito, eliminarProducto } = useContext(CarritoContext);
    
    return (
        <div>
            {
                carrito.map((el) => (
                    <div className="card mb-3" style={{ maxWidth: '540px', maxHeight: '150px' }} key={el.id}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={el.img} style={{maxHeight: '145px' }}  className="img-fluid rounded-start" alt={el.alt} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{el.nombre}</h5>
                                    <p className="card-text">Precio: {el.precio} $</p>
                                    <div className="d-flex cantDelete">
                                    <p className="card-text"><small className="text-muted">Cantidad: {el.cantidad}</small></p>
                                    <button onClick={()=>eliminarProducto(el.id)}><i class="fa-solid fa-trash" wheight="10px"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
