import React from "react";
import { useNavigate } from "react-router-dom";
import "./Item.css";
const Item = ({ item }) => {
  const { _id, name, img, description, price, quantity, supplierName } = item;
  const navigate = useNavigate();
  const itemDetail = (id) => {
    navigate(`/item/${id}`);
  };
  return (
    <div className="item">
      <img height={300} width={300} src={img} alt="" />
      <h1>{name}</h1>
      <h4>Price:{price}</h4>
      <h4>Quantity:{quantity}</h4>
      <h4>SupplierName:{supplierName}</h4>
      <p>Description:{description}</p>
      <button onClick={() => itemDetail(_id)} className="btn btn-primary">
        Update Item
      </button>
    </div>
  );
};

export default Item;
