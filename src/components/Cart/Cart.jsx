import React, { useState, useContext, useEffect } from "react";
import CartProvider, { CartContext } from "../../context/CartContext";
import { useCartContext } from "../../utils/hooks";
import ItemCount from "../SingleProduct/ItemCount";
import {MdDeleteOutline} from "react-icons/md";


const Cart = () => {
    const {cart, removeItem, clear} = useCartContext();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        cart.forEach(item => {
            setTotal((totalPrice) => totalPrice += item.price)
        });
    }, [])

    if(cart.length > 0){
        return(
            <section className="h-full text-center md:mx-96">
                <h2 className="text-center text-white text-4xl mt-10">Carrito</h2>
                <button onClick={() => clear()} className="text-xl mt-10 text-center border-2 bg-yellow-400 text-[#02236d] p-3 rounded-lg shadow-lg hover:bg-transparent hover:text-yellow-400">Vaciar</button>
                {cart.map((prod) => (
                    <div key={prod.id} className="text-center mt-11 flex justify-evenly bg-[#02236d] rounded-md w-[90%] m-5 p-4 shadow-inner shadow-black/50 items-center md:w-full">
                        <h3 className="text-white w-32 md:w-50 text-lg">{prod.title}</h3>
                        <p className="text-white text-lg">${prod.price}</p>
                        <p className="text-white text-lg">{prod.quantity}</p>
                        <button onClick={() => removeItem(prod.id)} className="text-white bg-red-600 rounded-md w-10 text-center">
                            <MdDeleteOutline className="text-3xl text-center w-full"/>
                        </button>
                    </div>
                ))}
                <div className="text-white text-2xl m-10">Total: <strong>{total}</strong></div>
            </section>
        );
    }else{
        return(
            <section className="h-full text-center md:mx-96">
                <h2 className="text-center text-white text-4xl mt-10">Carrito</h2>
                <div className="text-white text-center font-bold text-4xl mt-10">No hay productos en el carrito.</div>
            </section>

        );
    }
}

export default Cart;