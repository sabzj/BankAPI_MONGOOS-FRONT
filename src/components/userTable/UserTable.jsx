import { useBankContext } from "../../context/BankContext";
const UserTable = () => {
  const { users, deleteUser, updateUserStatus } = useBankContext();

  // Example for delete operation
  //   const handleDeleteUser = async (userId) => {
  //     try {
  //       const response = await fetch(`${BASE_url}/${userId}`, {
  //         method: "DELETE",
  //       });

  //       if (response.ok) {
  //         fetchAllUsers(); // Update the user list after deleting a user
  //       } else {
  //         const errorData = await response.json(); // Get detailed error information
  //         console.error("Error deleting user:", errorData.message);
  //       }
  //     } catch (error) {
  //       console.error("Error deleting user:", error);
  //     }
  //   };

  //   // Example for updating active status
  //   const handleStatusChange = async (userId, currentActiveValue) => {
  //     try {
  //       const response = await fetch(`${BASE_url}/${userId}/active`, {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ isActive: !currentActiveValue }),
  //       });

  //       if (response.ok) {
  //         fetchAllUsers(); // Update the user list after updating user status
  //       } else {
  //         const errorData = await response.json(); // Get detailed error information
  //         console.error("Error updating user status:", errorData.message);
  //       }
  //     } catch (error) {
  //       console.error("Error updating user status:", error);
  //     }
  //   };

  const handleDeleteUser = (userId) => {
    // Call the deleteUser function from the context
    deleteUser(userId);
  };

  const handleStatusChange = (userId, currentActiveValue) => {
    console.log(userId);
    updateUserStatus(userId, !currentActiveValue);
  };

  return (
    <div>
      <h2>User Table</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Passport Number</th>
            <th>Cash</th>
            <th>Credit</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.fullName}</td>
              <td>{user.familyName}</td>
              <td>{user.idNumber}</td>
              <td>{user.cash}</td>
              <td>{user.credit}</td>
              <td>{user.isActive ? "Yes" : "No"}</td>
              <td>
                <button onClick={() => handleDeleteUser(user._id)}>
                  Delete
                </button>
                <button
                  onClick={() => handleStatusChange(user._id, user.isActive)}
                >
                  {user.isActive ? "Deactivate" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;
