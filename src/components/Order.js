import React from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Order Confirm</h3>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Order;
