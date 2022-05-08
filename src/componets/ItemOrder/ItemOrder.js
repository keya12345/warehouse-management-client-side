import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ItemOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const email = user.email;

  useEffect(() => {
    const url = `https://shielded-harbor-12298.herokuapp.com/order?=${email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <h1>Orders:{orders.length}</h1>
    </div>
  );
};

export default ItemOrder;
