import './productContainer.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { productList } from '../productList/productList'
import { useParams } from 'react-router-dom'
import {collection, getDocs,query,where} from "firebase/firestore"
import { database } from '../../firebase/config'


export const ProductContainer = () => {

    const [productosDom, setProductosDom] = useState([])     // creo mi variable de productos con su hook de estado y la defino como array vacio

    const {categoriaId} = useParams() // capturo el valor de la categoria

    const [loading, setLoading] = useState(true)


    useEffect(()=>{

        const productosRef = collection(database, "productos") // creo una referencia de mi coleccion de productos

        const filtroQuery = categoriaId ?                                //hay categoria?
        query(productosRef, where("categoria", "==", categoriaId))      // entonces se define con el filtro de query
        :productosRef                                                   //sino con la lista tal cual llega

        getDocs(filtroQuery) // hago peticion a la referencia asincronica
        .then((res) =>{
            const productos = res.docs.map((el) => ({...el.data(), id: el.id})) //creo un array extrayendo los datos de docs con .data() mapeando y agrego el id nuevo
            setProductosDom(productos) // seteo mi nuevo array de productos
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    }, [categoriaId])

    return (
        <>
            <h2>{!categoriaId? "Nuestros productos": categoriaId  }:</h2>
            <hr />
            <div className="containFichas">
                {
                loading?
                "Cargando..." 
                : productList(productosDom)
                }
            </div>
        </>
    )
}