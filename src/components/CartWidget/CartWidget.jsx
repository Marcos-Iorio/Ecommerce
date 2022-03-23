import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartBadge } from "../CartBadge/CartBadge";

export default class CartWidget extends React.Component {
    render(){
        return(
            <div className="relative">
                <AiOutlineShoppingCart className="text-[30px] m-5 text-white hover:text-yellow-400"/>
                <CartBadge/>
            </div>
        );
    }
}
