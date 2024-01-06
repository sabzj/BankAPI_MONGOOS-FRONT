import React from "react";
import { useBankContext } from "../../context/BankContext";

const DepositeCashForm = () => {
  const { users, depositMoney } = useBankContext();
  const handleDeposite = (e) => {
    e.preventDefault();
    const userId = e.target.elements.deposite.value;
    const cash = parseFloat(e.target.elements.deposite.value);

    depositMoney(userId, cash).then(() => {
      e.target.elements.deposite.value = "";
    });
  };
  return (
    <section>
      <h2>Deposite Cash</h2>
      <form onSubmit={handleDeposite}>
        <select name="userDeposite" id="userDeposite">
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.fullName} {user.familyName} {user._id}
            </option>
          ))}
        </select>
        <label htmlFor="deposite">
          $:
          <input type="number" name="deposite" id="deposite" min={0} required />
        </label>
        <button type="submit"> Deposite </button>
      </form>
    </section>
  );
};

export default DepositeCashForm;
