import React from "react";
import { useState, useEffect } from "react";
import { useBankContext } from "../context/BankContext";

const Home = () => {
  const { fetchAllUsers, users } = useBankContext();
  return (
    <>
      <button onClick={fetchAllUsers}>Fetch All Users</button>
      {users.map((user) => (
        <p key={user._id}>{user.fullName} </p>
      ))}
    </>
  );
};

export default Home;
