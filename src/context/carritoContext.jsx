import { useState, createContext } from "react";

export const CarritoContext = createContext() // creo el contexto


export const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])  // defino mi estado inicial de carrito como array vacio
    const [finalizar , setFinalizar] = useState(false)  // estado para render del carrito

    const agregarAlCarrito = (item) => {     //el item se define en el componente
        setCarrito([...carrito, item])
    }

    const isInCart = (id) => {
        return carrito.some((el) => el.id === id) // va a devolver true o false a si el carrito ya cuenta con un el con ese id para usar en condicionales
    }

    const totalCarrito = () => {
        return carrito.reduce((acum, el) => acum + el.precio * el.cantidad, 0)
    }

    const totalCantidadCarrito = ()=>{
        return carrito.reduce((acum, el) => acum + el.cantidad, 0)
    }

    const eliminarProducto = (id) => {
        setCarrito(carrito.filter((el) => el.id !== id))  // seteo el carrito a un array con todos lo el menos el del id
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const buscarElemento = (id) => {
        return carrito.find((el) => el.id === id)
    }

    const actualizarCantidad = (id, cantidad) => {
        const nuevoCarrito = carrito.map((el) => {            // si hay un elemento cn mismo id le actualiza la cantidad
            if (el.id === id) {
                return { ...el, cantidad: el.cantidad + cantidad }
            }
            return el                                         //sino lo devuelve igual
        })

        setCarrito(nuevoCarrito);
    }

    const pagar = (resId)=> {
        Swal.fire({
            title: '¡Compra realizada con exito!',
            text: `Su numero de orden es : ${resId}`,             
            icon: 'success',
        })
        vaciarCarrito()
        setFinalizar(false)
    }

    return (
        <CarritoContext.Provider value={{
            carrito,
            agregarAlCarrito,
            isInCart,
            totalCarrito,
            eliminarProducto,
            vaciarCarrito,
            buscarElemento,
            actualizarCantidad,
            totalCantidadCarrito,
            finalizar,
            setFinalizar,
            pagar
        }}>
            {children}
        </CarritoContext.Provider>
    )
}






















