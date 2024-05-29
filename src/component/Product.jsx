import React from 'react';
import rating from "../assets/img/rating.svg";
import cartWhite from "../assets/img/cartWhite.svg";

export const Product = ({product}) => {
    return (
        <div className="product">
            <img src={product.image} alt=""/>
            <div className="info">
                <p className="title">{product.title}</p>
                <p className="price">$ {product.price}</p>
                <div className="rating">
                    <p>Rating: {product.rating.rate}</p>
                    <img src={rating ?? ''} alt="rating"/>
                </div>
                <div className="category">
                    <span>Category:</span>
                    <p>{product.category}</p>
                </div>
                <p className="description">{product.description}</p>
                <button>
                    <img src={cartWhite ?? ''} alt="cartWhite"/>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

