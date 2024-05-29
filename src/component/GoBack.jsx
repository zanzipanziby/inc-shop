import React from 'react';

import arrow from '../assets/img/arrowBack.svg'

export const GoBack = ({onClick}) => {
    return (
        <div className="arrowBack" onClick={onClick}>
            <button>
                <img src={arrow ?? ''} alt="arrow"/>
                Back to Best Seller
            </button>
        </div>
    );
};

