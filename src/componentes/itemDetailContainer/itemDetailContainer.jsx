import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../itemDetailCard/itemDetail'
import {doc, getDoc} from 'firebase/firestore'
import { database } from '../../firebase/config'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading,setLoading] = useState(true)

    const {itemId} = useParams() 

    useEffect(()=>{
        const itemRef = doc(database,"productos", itemId)  //referencio al elemento con el mismo id de itemId de la database

        getDoc(itemRef)     //lo llamo y con .data() formo el objeto original agregando el nuevo id
        .then((res) => {
            setItem({...res.data(), id: res.id})
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[itemId])


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