import React from 'react';
import {Card} from "./Card";

export const CardsContainer = ({products}) => {
    return (
        <div className={"cards"}>
            {products && products.map((product) => (<Card product={product}/>))}
        </div>
    );
};

