import React from "react";

const Rating = ({ value, maxValue }) => {
    const stars = Array.from({ length: maxvalue }, (_, index) => (
        <span key={index} className={ index < value ? 'filled' : 'empty'}>
            &#9733;
        </span>
        ));
        return (
            <div className="rating">{stars}</div>
        );
};

export default Rating;