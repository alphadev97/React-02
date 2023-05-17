import React from "react";

const Coin = ({ name, symbol, imgSrc, price }) => {
  return (
    <div className="coin">
      <img src={imgSrc} alt={name} />
      <h1>{symbol}</h1>
      <p>{name}</p>
      <h4>Rs. {price}</h4>
    </div>
  );
};

export default Coin;
