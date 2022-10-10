import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [serachParams, setSearchParams] = useSearchParams();
  const showActiveUser = serachParams.get("filter") === "active";
  return (
    <>
      <div>
        <h3>User 1</h3>
        <h3>User 2</h3>
        <h3>User 3</h3>
        <Outlet />
      </div>
      <div>
        <button
          onClick={() => {
            setSearchParams({ filter: "active" });
          }}
        >
          Active User
        </button>
        <button
          onClick={() => {
            setSearchParams({});
          }}
        >
          Reset User
        </button>
        {showActiveUser ? (
          <h2>Showing Active User</h2>
        ) : (
          <h2>Showing All User</h2>
        )}
      </div>
    </>
  );
};

export default Users;
