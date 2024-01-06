import React from "react";
import { useBankContext } from "../../context/BankContext";

const TransactionForm = () => {
  const { users, transactMoney } = useBankContext();
  const handleTransaction = (e) => {
    e.preventDefault();
    const fromUserId = e.target.elements.userForm.value;
    console.log("fromUserId", fromUserId);

    const toUserId = e.target.elements.toUser.value;
    console.log("toUserId", toUserId);

    const cash = parseFloat(e.target.elements.amount.value);
    transactMoney(fromUserId, toUserId, cash).then(() => {
      e.target.elements.amount.value = "";
    });
  };
  return (
    <section>
      <h2>Transaction</h2>
      <form onSubmit={handleTransaction}>
        <label htmlFor="userForm">
          From:
          <select name="userForm" id="userForm">
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.fullName} {user.familyName} {user._id}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="toUser">
          To:
          <select name="toUser" id="toUser">
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.fullName} {user.familyName} {user._id}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="amount">
          $:
          <input type="number" name="amount" id="amount" min={0} required />
        </label>
        <button type="submit"> Transact</button>
      </form>
    </section>
  );
};

export default TransactionForm;
