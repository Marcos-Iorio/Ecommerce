import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Loading from "../Loading/Loading";

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
        <div className="m-20">
            {isLoading ? <Loading/> :
             <div className="grid grid-cols-[repeat(4,250px)] gap-[2em] place-content-center">
                    { productos.map(producto => {
                    return(
                        <NavLink to={`/itemDetailContainer/${producto.id}`} key={producto.id} className="w-[250px]">
                            <div className="group h-[400px] w-[250px] rounded-md bg-[#02236d] border-transparent border-2 hover:shadow-xl hover:border-yellow-400 hover:border-2 hover:border-solid transition ease ">
                                <div className="h-[50%] p-5">
                                    <img className="w-full h-[100%] text-center rounded-md group-hover:shadow-lg group-hover:shadow-black/50" src={producto.thumbnail} alt={producto.title} />
                                </div>
                                <div className="flex flex-col h-48 p-5 items-center px-[15px]">
                                    <h1 className="text-md w-[100%] text-white">{producto.title}</h1>
                                    <div className="pt-2 pb-2 px-2 m-auto font-semibold bg-yellow-400 rounded-lg">${producto.price}</div>
                                </div> 
                            </div>
                        </NavLink>
                    );
                })}
            </div>}
        </div>
    );
        
}

export default ItemList;