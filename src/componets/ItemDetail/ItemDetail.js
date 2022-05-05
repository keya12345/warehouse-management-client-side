import React from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { itemId } = useParams();
  return (
    <div>
      <h1>Warehouse Item Detail:{itemId}</h1>
    </div>
  );
};

export default ItemDetail;
