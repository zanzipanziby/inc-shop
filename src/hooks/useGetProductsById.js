import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {shopAPI} from "../api/api";

export const useGetProductsById = () => {
    const [product, setProduct] = useState(null);
    const {productId} = useParams()
    useEffect(() => {
        shopAPI.getProductById(productId)
            .then(res => setProduct(res.data))
    }, [productId]);

    return product
}