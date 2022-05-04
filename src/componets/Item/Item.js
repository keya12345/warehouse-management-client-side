import React from "react";

const Item = ({ item }) => {
  const { name, img, description, price, quantity, supplierName } = item;
  return (
    <div>
      <img height={250} width={300} src={img} alt="" />
      <h2>{name}</h2>
    </div>
  );
};

export default Item;
