import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/carritoContext'
import { productoAñadido, sinStock } from '../../helpers/toastify'

export const productList = (items) => {    //funcion que recive por parametro un array de productos para pasar en dom
    
    const {agregarAlCarrito, isInCart, buscarElemento, actualizarCantidad} = useContext(CarritoContext)

    const handleAgregar = (el) =>{
        const item = {
            id : el.id,
            nombre : el.nombre,
            img : el.img,
            alt : el.alt,
            stock: el.stock,
            precio : el.precio,
            cantidad : 1
        }

        if (isInCart (el.id)){                                    //verifico si ya esta en el carrito
            const productoEnCarrito = buscarElemento(el.id)          //referencio a ese elemento
            
            if ( item.cantidad + productoEnCarrito.cantidad <= item.stock){    //veo q no se pase la suma la cantidad al stock
                actualizarCantidad(el.id, item.cantidad)
                productoAñadido()
            }else {
                sinStock()
            }
        } else{
            agregarAlCarrito(item)
            productoAñadido()
        }
    }

    
    
    return (
        <>
            {
                items.map( (el) => (                      //mapeo en jsx mi carta de productos 
                    <div className="fichas" key={el.id}>
                        <div>
                            <Link to={`/detail/${el.id}`}> <img src={el.img} alt={el.alt}/> </Link>
                            <h2>{el.nombre}</h2>
                        </div>
                        <div className="precio">
                            <p><strong>${el.precio}$</strong></p>
                            <button onClick={()=> handleAgregar(el)}>Comprar</button>
                        </div>
                    </div>
                    )
                )
            }
        </>
    )
}
