import React from "react";
import { useState, useEffect } from "react";
import { useBankContext } from "../context/BankContext";
import UserTable from "./userTable/UserTable";

const Home = () => {
  const { fetchAllUsers, users } = useBankContext();
  return (
    <>
      <button onClick={fetchAllUsers}>Fetch All Users</button>
      {users.map((user) => (
        <p key={user._id}>{user.fullName} </p>
      ))}
      <UserTable />
    </>
  );
};

export default Home;
