import React from "react";
import { Link, useParams } from "react-router-dom";

const ItemDetail = () => {
  const { itemId } = useParams();
  return (
    <div>
      <h1>Warehouse Item Detail:{itemId}</h1>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
