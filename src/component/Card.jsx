import React from 'react';
import {Link} from "react-router-dom";

export const Card = ({product}) => {
    return (
        <div className={"card"}>
            <img src={product.image} alt="img"/>
            <h4>{product.title}</h4>
            <p className="price">${product.price}</p>
            <Link to={`/product/${product.id}`}>Show more</Link>
        </div>
    );
};

