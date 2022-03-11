import React, { useEffect, useState } from 'react';
import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";

const ItemCount = (props) => {
    const [sumOne, addOne] = useState(props.initial);
    return(
        <>  
            <div className="flex space-between justify-center w-25 m-25 h-10 flex-wrap">
                <div className='border-solid border-2 border-yellow-400 rounded-md flex flex-row h-9 mb-10'>
                    <button className="relative -top-4" onClick={() => addOne(Number(sumOne) < props.stock ? Number(sumOne) + 1 : props.stock)}><GrAdd className="text-[20px] m-5 text-white"></GrAdd></button>
                    <div className="text-xl text-white">{sumOne}</div>
                    <button className="relative -top-4" onClick={() => addOne(sumOne === 0 ? 0: sumOne - 1)}><AiOutlineMinus className="text-[20px] m-5 text-white"></AiOutlineMinus></button>
                </div>
                <button className="mt-25 border-solid border-2 border-yellow-400 rounded-md text-xl w-full text-center text-white p-3 w-100 hover:bg-white/20" onClick={() => sumOne === 0 ? alert('Debe haber un minimo de 1 producto para poder agregarlo al carrito') : alert('Producto agregado correctamente')}>Agregar al carrito</button>
            </div>
           
        </>
    );
}
export default ItemCount;