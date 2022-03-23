import React, { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ItemCount = (props) => {
    const [sumOne, addOne] = useState(props.initial);

    return(
        <>  
                <div className='rounded-md flex flex-row h-9 mb-10'>
                    <button className="relative -top-4" onClick={() => addOne(sumOne === 0 ? 0 : sumOne - 1)}><AiOutlineMinus className="text-[20px] m-5 text-white"></AiOutlineMinus></button>
                    <div className="text-xl text-white">{sumOne}</div>
                    <button className="relative -top-4" onClick={() => addOne(Number(sumOne) < props.stock ? Number(sumOne) + 1 : props.stock)}><AiOutlinePlus className="text-[20px] m-5 text-white"></AiOutlinePlus></button>
                </div>
                <button className="mt-25  bg-yellow-400/80 rounded-md text-xl w-full text-center text-[#02236d] font-semibold p-3 w-100 hover:bg-white/20 hover:text-white" onClick={() => props.onAdd(sumOne)}>Agregar al carrito</button>   
        </>
    );
}
export default ItemCount;