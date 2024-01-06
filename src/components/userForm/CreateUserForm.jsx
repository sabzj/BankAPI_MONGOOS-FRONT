import React from "react";
import { useBankContext } from "../../context/BankContext";

const CreateUserForm = () => {
  const { createNewUser } = useBankContext();

  // get form data and send it to the function (createNewUser)
  const createFormeSubmitted = (e) => {
    e.preventDefault();
    // extracting the values data from the form
    const firstName = e.target.elements.firstName.value;
    const lasttName = e.target.elements.lastName.value;
    const passportNumber = e.target.elements.passportNumber.value;

    // creating the userData object to send it to the createNewUser function
    const newUserData = {
      fullName: firstName,
      familyName: lasttName,
      idNumber: passportNumber,
    };
    console.log("newUserData", newUserData);
    // calling the function and sending the object to it/ then doing reseting the form
    createNewUser(newUserData).then(() => {
      e.target.reset();
    });
  };
  return (
    <section>
      <h2>Create New User</h2>
      <form onSubmit={createFormeSubmitted}>
        <label htmlFor="firstName">
          First Name:
          <input type="text" name="firstName" id="firstName" required />
        </label>

        <label htmlFor="lastName">
          Last Name:
          <input type="text" name="lastName" id="lastName" required />
        </label>

        <label htmlFor="passportNumber">
          PassportNumer:
          <input
            type="text"
            name="passportNumber"
            id="passportNumber"
            required
          />
        </label>

        <button type="submit"> Create Account </button>
      </form>
    </section>
  );
};

export default CreateUserForm;
