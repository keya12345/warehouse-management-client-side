import React from "react";
import "./Item.css";
const Item = ({ item }) => {
  const { name, img, description, price, quantity, supplierName } = item;
  return (
    <div className="item">
      <img height={300} width={300} src={img} alt="" />
      <h1>{name}</h1>
      <h3>Price:{price}</h3>
      <h3>Quantity:{quantity}</h3>
      <h3>SupplierName:{supplierName}</h3>
      <p>Description:{description}</p>
      <button>Update Item</button>
    </div>
  );
};

export default Item;
