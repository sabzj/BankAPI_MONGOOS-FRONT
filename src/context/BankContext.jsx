import React from "react";
import { useContext, useState, createContext, useEffect } from "react";

const BankContext = createContext();

// custom Hook useBankContext
export const useBankContext = () => {
  return useContext(BankContext);
};

export const BankProvider = ({ children }) => {
  const BASE_url = "https://bankapibd.onrender.com/api/v1/banking/users/";
  //   const BASE_url =
  //     "https://banking-system-api-with-mongo.onrender.com/api/v1/banking/users";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);
  //Functions & Variables

  //Fetch all users ....
  const fetchAllUsers = async () => {
    try {
      const response = await fetch(BASE_url, {
        method: "GET",
      });
      // Get the data from the response as json
      const data = await response.json();
      //set the users
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data of users", error);
    }
  };

  //Create new user
  const createNewUser = async (newUserInfo) => {
    try {
      // fetch means send (fetch here like in postman)
      const response = await fetch(BASE_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserInfo),
      });
      // If created successfully we update user array
      if (response.ok) {
        fetchAllUsers();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`${BASE_url}${userId}`, {
        method: "DELETE",
      });
      fetchAllUsers(); // Update the user list after deleting a user
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const depositMoney = async (userId, cash) => {
    try {
      const response = await fetch(`${BASE_url}${userId}/deposit`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cash }),
      });

      if (response.ok) {
        fetchAllUsers(); // Update the user list after depositing money
      } else {
        console.error("Error depositing the money:", response.statusText);
      }
    } catch (error) {
      console.error("Error depositing money:", error);
    }
  };

  const updateUserCredit = async (userId, credit) => {
    try {
      const response = await fetch(`${BASE_url}${userId}/credit`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credit }),
      });

      if (response.ok) {
        fetchAllUsers(); // Update the user list after updating user credit
      } else {
        console.error("Error updating user credit:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating user credit:", error);
    }
  };

  const transactMoney = async (fromUserId, toUserId, cash) => {
    try {
      const response = await fetch(
        `${BASE_url}${fromUserId}/transact/${toUserId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cash }),
        }
      );
      fetchAllUsers(); // Update the user list after the money transaction

      // if (response.ok) {
      //   fetchAllUsers(); // Update the user list after the money transaction
      // } else {
      //   console.error("Error transacting money:", response.statusText);
      // }
    } catch (error) {
      console.error("Error transacting money:", error);
    }
  };

  const updateUserStatus = async (userId, isActive) => {
    try {
      const response = await fetch(`${BASE_url}${userId}/active`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isActive }),
      });

      if (response.ok) {
        fetchAllUsers(); // Update the user list after updating user status
      } else {
        console.error("Error updating user status:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

  const filterByAmountOfCash = async (amount, isGreaterThan, andEqual) => {
    try {
      const response = await fetch(`${BASE_url}${amount}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isGreaterThan, andEqual }),
      });

      if (response.ok) {
        const filteredUsers = await response.json();
        console.log(filteredUsers); // Handle the filtered users as needed
      } else {
        console.error(
          "Error filtering users by amount of cash:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error filtering users by amount of cash:", error);
    }
  };

  // THings we want to send
  const contextValue = {
    users,
    fetchAllUsers,
    deleteUser,
    createNewUser,
    depositMoney,
    updateUserCredit,
    transactMoney,
    updateUserStatus,
    filterByAmountOfCash,
  };

  return (
    <BankContext.Provider value={contextValue}>{children}</BankContext.Provider>
  );
};
