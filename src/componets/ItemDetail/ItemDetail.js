import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ItemDetail = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `https://shielded-harbor-12298.herokuapp.com/item/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <div className="text-center w-50 mx-auto">
      <h1 className="text-center text-primary mb-3">Warehouse Item Detail</h1>
      <img height={400} width={400} src={item.img} alt="" />
      <h2>Name:{item.name}</h2>
      <h3>Price:{item.price}</h3>
      <h3>Quantity:{item.quantity}</h3>
      <h3>SupplierName:{item.supplierName}</h3>
      <p>Description:{item.description}</p>
      <div className="text-center">
        <Link to={`/checkout/${itemId}`}>
          <button className="btn btn-primary">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
