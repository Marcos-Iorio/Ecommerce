import {React, useEffect, useState} from "react";
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});

    const getProductInfo = async () =>{
        try {
            const response = await fetch('https://api.mercadolibre.com/items/MLA862046257', {
            method: 'GET'
            })
            const data = await response.json();
            setProductDetail(data)
        } catch (error) {
            console.error(error);
        }
        
    }

    useEffect(() => {
        setTimeout(() => {
            getProductInfo();
        }, 2000);
    }, [])

    return(
        <div>
            <ItemDetail item={productDetail}></ItemDetail>
        </div>
    );
     
}

export default ItemDetailContainer;