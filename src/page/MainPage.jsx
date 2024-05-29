import React from 'react';
import {useGetProducts} from "../hooks/useGetProducts";
import {CardsContainer} from "../component/CardsContainer";
import {Title} from "../component/Title";
import {Loader} from "../component/Loader";


export const MainPage = () => {
    const products = useGetProducts()

    if (!products) return <Loader/>
    return (
        <>
            <Title>{'best sellers'}</Title>
            <CardsContainer products={products}/>
        </>
    )
};

