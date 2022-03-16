import React, { useEffect, useState } from "react";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";
import ItemCount from './ItemCount'


const ItemDetail = ({item}) => {
    /* const [imagenes, setImages] = useState([]);

    const waitImages = new Promise((resolve, reject) =>{
        resolve(item.pictures);
    }).then(result => {
        setImages(result);
        console.log(result)
    }) */

    /* useEffect(() => {
       
    }, []) */

    return(
        <>
            <div key={item.id} className="flex flex-row justify-center bg-[#02236d] rounded-lg shadow-2xl h-[40em]">
                <div className="p-20 flex flex-row">
                    <img className="w-[40%] h-full rounded-lg" src={item.pictures[0].url} alt={item.title} />
                    <div className="flex flex-col h-full px-[50px] w-[50%]">
                        <h1 className="text-3xl text-white">{item.title}</h1>
                        <p className="text-xl text-white">{item.description ? item.description : ''}</p>
                        <div className="flex flex-col h-96">
                            <div className="text-white py-3">Disponible: {item.available_quantity}</div>
                            <div className="text-white py-3">Condición: {item.condition === "new" ? "Nuevo" : "Usado"}</div>
                            <div className="mt-auto text-left h-48">
                                <div className="pt-2 mb-4 pb-2 text-center text-2xl px-2 font-semibold bg-yellow-400 rounded-lg w-[35%]">${item.price}</div>
                                <ItemCount initial='1' stock={item.available_quantity}/>
                            </div>
                            
                        </div>  
                    </div> 
                </div>
                
            </div>
        </>
    );

}

export default ItemDetail;