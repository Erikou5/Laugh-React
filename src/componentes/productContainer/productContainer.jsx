import './productContainer.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { productList } from '../../itemList/itemList'


export const ProductContainer = ({mensaje}) => {

    const [productosDom, setProductosDom] = useState([])     // creo mi variable de productos con su hook de estado y la defino como array vacio

    useEffect(()=>{                        // se usa useEffect para que solo se cargue una vez la lista con dependencia vacia
        pedirDatos()
        .then((res) => {
            setProductosDom(res)       //leno mi array de productos con la respuesta de la promesa
        })
    }, [] )

    return (
        <>
            <h2>Nuestros productos:</h2>
            <hr />
            <div className="containFichas">
                { productList(productosDom)}
            </div>
            <hr/>
            <p>{mensaje}</p>
        </>
    )
}