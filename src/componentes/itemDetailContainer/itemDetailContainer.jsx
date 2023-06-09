import { useState } from 'react'
import { useEffect } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../itemDetailCard/itemDetail'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading,setLoading] = useState(true)

    const {itemId} = useParams() 

    useEffect(()=>{
        setLoading(true)
        
        pedirDatos()        // a mi lista la filtro por el elemento que coincida el id de la ruta y lleno el item con los param de ese objeto
        .then((res) => {
            setItem(res.find((el) => el.id === Number(itemId))) // lo paso a number porq viene como string
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    }, [itemId] )

    return (
        <div>
            {
                loading ?
                <p>Cargando...</p>                 
                : <ItemDetail {...item}/>
            }
        </div>
    )
}