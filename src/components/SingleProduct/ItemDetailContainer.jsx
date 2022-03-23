import {React, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail'
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});
    const [isLoading, setLoading] = useState(true);
    const {itemId} = useParams();

    useEffect(() =>{
        console.log(itemId);
    }, [itemId]);

    const getProductInfo = async () =>{
        try {
            const response = await fetch(`https://api.mercadolibre.com/items/${itemId}`, {
            method: 'GET'
            })
            const data = await response.json();
            setProductDetail(data)
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
        
    }

    useEffect(() => {
        getProductInfo();
    }, [])

    return(
        <div className="m-20">
            {isLoading || Object.keys(productDetail).length === 0 ? <Loading/> : <ItemDetail item={productDetail}></ItemDetail>}
        </div>
    );
     
}

export default ItemDetailContainer;