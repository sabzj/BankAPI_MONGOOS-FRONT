import React from "react";
import TransactionForm from "./Transaction/TransactionForm";
import DepositeCashForm from "./depositeCashForm/DepositeCashForm";

const Transactions = () => {
  return (
    <>
      <TransactionForm />
      <DepositeCashForm />
    </>
  );
};

export default Transactions;
