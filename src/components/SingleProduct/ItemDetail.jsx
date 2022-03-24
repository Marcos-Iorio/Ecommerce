import React, { useEffect, useState, useContext } from "react";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";
import {Link} from 'react-router-dom';
import { useCartContext } from "../../utils/hooks";
import ItemCount from './ItemCount'


const ItemDetail = ({item}) => {
    const [quantity, setQuantity] = useState();

    const {addItem} = useCartContext();

    const onAdd = (cantidad) =>{
        if(cantidad === 0){
            return;
        }else{
            setQuantity(cantidad);
            item.quantity = cantidad;
            addItem(item);
        }
    }
  
    useEffect(()=>{
        if(quantity < 0){
            alert("No se puede agregar 0 productos")
        }
    }, [quantity])

    return(
        <>
            <div key={item.id} className="flex flex-row justify-center bg-[#02236d] rounded-lg shadow-2xl h-full">
                <div className="p-10 flex flex-col w-full md:flex-row md:w-[80%] ">
                    <img className="w-full md:w-[50%] h-full rounded-lg" src={item.pictures[0].url} alt={item.title} />
                    <div className="flex flex-col h-full py-[50px] w-[100%] justify-between">
                        <h1 className="text-3xl text-white">{item.title}</h1>
                        <p className="text-xl text-white">{item.description ? item.description : ''}</p>
                        <div className="flex flex-col h-96">
                            <div className="text-white py-3">Disponible: {item.available_quantity}</div>
                            <div className="text-white py-3">{item.condition === "new" ? "Nuevo" : "Usado"} | {item.sold_quantity} vendidos.</div>
                            <div className="mt-auto text-left h-48 w-[50%] flex">
                                <div className="flex space-between justify-start w-25 m-25 h-10 flex-wrap">
                                    <div className="pt-2 mb-4 pb-2 text-center text-[#02236d] text-2xl px-2 font-semibold bg-yellow-400 rounded-lg w-[12em] block">${item.price}</div>
                                    {quantity > 0 ? <Link to="/cart" className="mt-25  bg-yellow-400/80 rounded-md text-xl w-full text-center text-[#02236d] font-semibold p-3 w-100 hover:bg-white/20 hover:text-white">Terminar compra</Link> : <ItemCount initial='1' stock={item.available_quantity} onAdd={onAdd}/>}
                                </div>
                            </div>
                        </div>  
                    </div> 
                </div>
                
            </div>
        </>
    );

}

export default ItemDetail;