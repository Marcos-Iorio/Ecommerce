import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default class CartWidget extends React.Component {
    render(){
        return(
            <AiOutlineShoppingCart className="text-[30px] m-5 text-white hover:text-yellow-400"/>
        );
    }
}
