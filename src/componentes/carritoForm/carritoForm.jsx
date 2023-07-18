import { useContext, useState } from "react"
import { CarritoContext } from "../../context/carritoContext"
import { collection, addDoc } from "firebase/firestore"
import { database } from '../../firebase/config'
import { faltanDatos } from "../../helpers/toastify"
import "./carritoForm.css"

export const CarritoForm = () => {

    const { totalCarrito, pagar, setFinalizar, carrito } = useContext(CarritoContext)

    const [values, setValues] = useState(             // creo un estado inicial value como objeto con valores iniciales vacios
        {
            nombre: "",
            dni: "",
            tarjeta: "",
            email: ""
        }
    )

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        }    // voy dinamicamente llenando el valor del input con lo que escribo
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
        
        //validacion que todos los campos tengan valor
        if (!values.nombre || !values.email || !values.dni || !values.tarjeta) {  
            faltanDatos()
            return
        }

        const orden = {                // creo el objeto para el submit
            clienteInfo: values,
            items: carrito.map(({ precio, nombre, cantidad }) => ({ precio, nombre, cantidad })), //mapeo el carrito con las propiedades que quiero
            total: totalCarrito(),
            fecha: new Date()
        }
        const orderRef = collection(database, "ordenes")
        addDoc(orderRef, orden)
            .then((res) => {
                pagar(res.id)  //saco el id de la respuesta para usar de numero de compra
            })
    }


    return (
        <>
            <h5 className="card-title">Su total a pagar es de: {totalCarrito()} $</h5>
            <form onSubmit={handleSubmit} className="carritoForm" >
                <div>
                    <label htmlFor="nombre">Nombre y apellido:</label>
                    <input
                        onChange={handleInputChange}
                        id="nombre"
                        type="text"
                        placeholder="Nombre"
                        className="form-control"
                        name="nombre"
                        value={values.nombre}
                    />
                </div>
                <div>
                    <label htmlFor="dni">Dni:</label>
                    <input
                        onChange={handleInputChange}
                        id="dni"
                        type="text"
                        placeholder="DNI"
                        className="form-control"
                        name="dni"
                        value={values.dni}
                    />
                </div>
                <div>
                    <label htmlFor="tarjeta">Tarjeta:</label>
                    <input
                        onChange={handleInputChange}
                        id="tarjeta"
                        type="text"
                        placeholder="tarjeta"
                        className="form-control"
                        name="tarjeta"
                        value={values.tarjeta}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        onChange={handleInputChange}
                        id="email"
                        type="email"
                        placeholder="email"
                        className="form-control"
                        name="email"
                        value={values.email}
                    />
                </div>
                <div className="botonForm">
                    <button onClick={() => setFinalizar(false)} type="button" className="btn btn-secondary" >Volver</button>
                    <button type="submit" className="btn btn-primary" >Pagar</button>
                </div>
            </form>
        </>
    )
}