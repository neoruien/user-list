import React, { useState } from "react";
import Wrapper from "./components/helpers/Wrapper";
import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (newName, newAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: newName, age: newAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Wrapper>
  );
}

export default App;
