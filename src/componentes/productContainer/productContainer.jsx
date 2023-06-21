import './productContainer.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { productList } from '../productList/productList'
import { useParams } from 'react-router-dom'


export const ProductContainer = () => {

    const [productosDom, setProductosDom] = useState([])     // creo mi variable de productos con su hook de estado y la defino como array vacio

    const {categoriaId} = useParams() // capturo el valor de la categoria


    useEffect(()=>{                        // se usa useEffect para que solo se cargue una vez la lista con dependencia vacia
        pedirDatos()
        .then((res) => {
            if (!categoriaId){            //sino hay categoria
                setProductosDom(res)       //lleno mi array de productos con la respuesta de la promesa
            }else {
                setProductosDom(res.filter((el) => el.categoria === categoriaId )) // lo llena con los que coincida la categoria
            }
        })
    }, [categoriaId] )

    return (
        <>
            <h2>{!categoriaId? "Nuestros productos": categoriaId  }:</h2>
            <hr />
            <div className="containFichas">
                {
                productosDom.length === 0?
                "Cargando..." 
                : productList(productosDom)
                }
            </div>
        </>
    )
}