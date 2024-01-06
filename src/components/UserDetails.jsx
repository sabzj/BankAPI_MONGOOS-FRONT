import React from "react";
import CreateUserForm from "./userForm/CreateUserForm.jsx";
import UserTable from "./userTable/UserTable.jsx";

const UserDetails = () => {
  return (
    <main>
      <CreateUserForm />
      <UserTable />
    </main>
  );
};

export default UserDetails;
