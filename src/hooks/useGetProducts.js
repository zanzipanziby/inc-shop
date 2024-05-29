import {useEffect, useState} from "react";
import {shopAPI} from "../api/api";

export const useGetProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        shopAPI.getProducts().then(res => setProducts(res.data))
    }, []);

    return products
}