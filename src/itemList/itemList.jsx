
export const productList = (items) => {    //funcion que recive por parametro un array de productos para pasar en dom
    return (
        <>
            {
                items.map( (el) => (                      //mapeo en jsx mi carta de productos 
                    <div className="fichas" key={el.id}>
                        <div>
                            <img src={el.img} alt={el.alt}/>
                            <h2>{el.nombre}</h2>
                        </div>
                        <div className="precio">
                            <p><strong>${el.precio}$</strong></p>
                            <button>Comprar</button>
                        </div>
                    </div>
                    )
                )
            }
        </>
    )
}
