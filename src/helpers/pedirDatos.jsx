import productos from "../data/productos.json"

export const pedirDatos = () => {                          //simulo la asincronia de apis con una promesa
    return new Promise (( resolve,reject) =>{
        setTimeout( () => {
            resolve(productos)
        }, 500)
    })
}
