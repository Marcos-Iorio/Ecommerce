import React from "react";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";
import ItemCount from './ItemCount'


const ItemDetail = ({item}) => {
    return(
        <>
            <div key={item.id} className="flex flex-row justify-evenly">
                <img className="w-[500px] h-100" src={item.thumbnail} alt={item.title} />
                <div className="flex flex-col items-stretch px-[50px]">
                    <h1 className="text-3xl text-white">{item.title}</h1>
                    <p className="text-xl text-white">{item.description ? item.description : ''}</p>
                    <div className="flex flex-col">
                        <div className="text-center text-2xl text-white p-5">${item.price}</div>
                        <ItemCount initial='1' stock={item.available_quantity}/>
                    </div>  
                </div> 
            </div>
        </>
    );

}

export default ItemDetail;