import React from 'react';

import {useNavigate} from "react-router-dom";
import {GoBack} from "../component/GoBack";
import {useGetProductsById} from "../hooks/useGetProductsById";
import {Product} from "../component/Product";
import {Loader} from "../component/Loader";

export const ProductPage = () => {
    const product = useGetProductsById()

    const navigate = useNavigate();
    const toPreviousPageHandler = () => {
        navigate('/')
    }

    if (!product) return <Loader/>

    return (
        <>
            <GoBack onClick={toPreviousPageHandler}/>
            <Product product={product}/>
        </>
    );
};

