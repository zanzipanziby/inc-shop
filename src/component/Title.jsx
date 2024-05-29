import React from 'react';

export const Title = ({children}) => {
    return (
        <h1 className={"bestSeller"}>{children.toUpperCase()}</h1>
    );
};

