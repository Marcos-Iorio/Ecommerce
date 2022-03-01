import React from "react";
import ItemCount from "./ItemCount";

export default class ItemListContainer extends React.Component{
    render(){
        return(
            <div className="flex flex-col justify-center h-full">
                <ItemCount stock="5" initial="1"/> 
                <h1 className="text-4xl">Proximamente catalogo!</h1>
            </div>      
        );
    }
}