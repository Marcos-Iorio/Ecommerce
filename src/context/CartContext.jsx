import React, {createContext, useEffect, useState} from "react";

export const CartContext = createContext({});


const CartProvider = ({defaultValue = [], children}) => {
    const [cart, setCart] = useState(defaultValue);

    const addItem = (item) =>{
        if(isInCart(item.id) !== undefined){
            alert("El producto ya está en el carrito")
        }else{
            setCart((prev) => [...prev, item]);
            alert("Producto agregado correctamente.")
        }   
    }

    const removeItem = (itemId) =>{
        setCart((prev) => prev.filter((prod) => prod.id !== itemId));
    }

    const clear = () =>{
        if(cart.length === 0){
            console.log("El carrito ya está vacio");
        }
        setCart([...defaultValue])
    }

    const isInCart = (itemId) =>{
        return cart.find(item => {return itemId === item.id})
    }


    return <CartContext.Provider value={{cart, addItem, removeItem, isInCart, clear}}>
                {children}
        </CartContext.Provider>

}

export default CartProvider;

