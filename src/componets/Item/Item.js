import React from "react";
import "./Item.css";
const Item = ({ item }) => {
  const { name, img, description, price, quantity, supplierName } = item;
  return (
    <div className="item">
      <img height={300} width={300} src={img} alt="" />
      <h1>{name}</h1>
      <h4>Price:{price}</h4>
      <h4>Quantity:{quantity}</h4>
      <h4>SupplierName:{supplierName}</h4>
      <p>Description:{description}</p>
      <button className="btn btn-primary">Update Item</button>
    </div>
  );
};

export default Item;
