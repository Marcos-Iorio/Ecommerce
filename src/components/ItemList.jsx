import React from "react";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const ItemList = () => {
    const [productos, setProductos] = useState([]);
    const [isLoading, setLoading] = useState(true);
    
    const items = [
        {
            id: 1,
            title: "Camiseta titular 2022 hombre",
            price: 15000
        },
        {
            id: 2,
            title: "Pantalón entrenamiento",
            price: 6000
        },
        {
            id: 3,
            title: "4ta Camiseta 20 años Japón",
            price: 8000
        },
        {
            id: 4,
            title: "Camperón",
            price: 19000
        },
    ];

    useEffect(() =>{
        const cargarItems = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(items);
            }, 2000);
            
        }).then(result => {
           setProductos(result);
           setLoading(false);
        }).catch(err => console.log(err))
    }, [])

    return(
        <div className="flex flex-row p-10">
            {isLoading ? <Loading/> : productos.map(producto => {
                return(
                <React.Fragment key={producto.id}>
                    <div className="m-10 p-10 w-full rounded shadow-lg border-2 border-dashed border-yellow-400 bg-transparent text-white hover:bg-yellow-400 hover:text-black">{producto.title}
                        <p>${producto.price}</p>
                    </div>
                </React.Fragment>
                
                );
            })}
        </div>
    );
        
}

export default ItemList