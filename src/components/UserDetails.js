import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  return (
    <div>
      <h4>Details about user {userId}</h4>
    </div>
  );
};

export default UserDetails;
