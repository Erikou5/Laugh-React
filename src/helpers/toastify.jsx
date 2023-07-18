
export const productoAñadido = () => {
    Toastify({
        text: "Producto añadido!",
        duration: 1500,
        close: false,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: false,
        style: {
            background: "#2a9fd6",
        }
        }).showToast();
}


export const sinStock = () =>{
    Toastify({
        text: "No hay stock disponible!",
        duration: 1500,
        close: false,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: false,
        style: {
            background: "red",
        }
        }).showToast();
}

export const faltanDatos = () => {
    Toastify({
        text: "Por favor llena todos los campos!",
        duration: 1500,
        close: false,
        gravity: "bottom",
        position: "right",
        stopOnFocus: false,
        style: {
            background: "red",
        }
    }).showToast();
}