import React, { useEffect, useState } from 'react';
import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";

const ItemCount = (props) => {
    const [sumOne, addOne] = useState(props.initial);
    return(
        <>  
            <div className="flex space-between justify-center w-25 m-25 h-10 flex-wrap">
                <button className="relative -top-4" onClick={() => addOne(Number(sumOne) < props.stock ? Number(sumOne) + 1 : props.stock)}><GrAdd className="text-[25px] m-5 text-white"></GrAdd></button>
                <div className="text-2xl">{sumOne}</div>
                <button className="relative -top-4" onClick={() => addOne(sumOne === 0 ? 0: sumOne - 1)}><AiOutlineMinus className="text-[30px] m-5 text-black"></AiOutlineMinus></button>
                <button className="mt-25 border-solid border-2 border-yellow-300 rounded-md text-xl w-full text-center" onClick={() => sumOne === 0 ? alert('Debe haber un minimo de 1 producto para poder agregarlo al carrito') : alert('Producto agregado correctamente')}>Agregar al carrito</button>
            </div>
           
        </>
    );
}
export default ItemCount;