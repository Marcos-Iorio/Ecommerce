import React from "react";
import { useState, useEffect } from "react";
import Loading from "../Loading";

const ItemList = () => {
    const [productos, setProductos] = useState([]);
    const [isLoading, setLoading] = useState(true);
    
    const getProducts = async () => {
        try {
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=boca%juniors');
            const data = await response.json();
            setProductos(data.results)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() =>{
        setTimeout(() => {
            getProducts()
            setLoading(false);
        }, 2000);
    }, [])

    return(
        <div className="m-40">
            <div className="grid grid-cols-4 gap-[5em]">
                {isLoading ? <Loading/> : productos.map(producto => {
                    return(
                        <div key={producto.id} className="h-96 rounded-md shadow-xl hover:shadow-[#02236d] transition ease delay-100">
                        <img className="w-full h-2/4 text-center rounded-t-md" src={producto.thumbnail} alt={producto.title} />
                        <div className="flex flex-col h-48 p-5 items-center px-[15px]">
                            <h1 className="text-md w-[100%] text-white">{producto.title}</h1>
                            <div className="pt-2 pb-2 px-2 m-auto font-semibold bg-yellow-400 rounded-lg">${producto.price}</div>
                        </div> 
                    </div>
                    
                    );
                })}
            </div>
        </div>
    );
        
}

export default ItemList;