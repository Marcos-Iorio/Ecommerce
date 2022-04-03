import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Loading from "../Loading/Loading";
import {getParams} from '../../utils/utils'

const ItemList = () => {
    const [productos, setProductos] = useState([]);
    const [isLoading, setLoading] = useState(true);
    
    const getProducts = async () => {
        const search = getParams(window.location.search);
        try {
            const response = await fetch(`http://localhost:5000/api/items?q=${search}`);
            const data = await response.json();
            setProductos(data)
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() =>{
        getProducts();
        console.log(productos)
    }, [])

    if(!isLoading){
        if(productos.length > 0){
            return(
                <div className="m-20">
                     <div className="grid grid-cols-1 w-full gap-[2em] place-content-center justify-items-center md:grid-cols-[repeat(4,250px)]">
                            { productos.map(producto => {
                            return(
                                <NavLink to={`/itemDetailContainer/${producto.id}`} key={producto.id} className="w-[250px] justify-center">
                                    <div className="group h-[400px] w-[250px] rounded-md bg-[#02236d] border-transparent border-2 hover:shadow-xl hover:border-yellow-400 hover:border-2 hover:border-solid transition ease ">
                                        <div className="h-[50%] p-5">
                                            <img className="w-full h-[100%] text-center rounded-md group-hover:shadow-lg group-hover:shadow-black/50" src={producto.thumbnail} alt={producto.title} loading="lazy" />
                                        </div>
                                        <div className="flex flex-col h-48 p-5 items-center px-[15px]">
                                            <h1 className="text-md w-[100%] text-white">{producto.title}</h1>
                                            <div className="pt-2 pb-2 px-2 m-auto font-semibold bg-yellow-400 rounded-lg">${producto.price}</div>
                                        </div> 
                                    </div>
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            );
        }else{
            return( <p>"No se encontraron productos"</p>);
        }    
    }else{
        return( <Loading></Loading>)
    }    
}

export default ItemList;