import React from 'react';

export const Container = (props) => {
    return (
        <div className="appContainer">
            {props.children}
        </div>
    );
};

