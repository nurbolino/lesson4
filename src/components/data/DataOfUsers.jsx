import React from "react";

export const DataOfUsers = () => {
  const users = [
    {
      name: "Max",
      userName: "111",
      id: setTimeout(Date.now(), 1000),
    },
    {
      name: "Bob",
      userName: "222",
      id: setTimeout(Date.now(), 2000),
    },
    {
      name: "Gallaher",
      userName: "333",
      id: setTimeout(Date.now(), 3000),
    },
  ];

  return (
    <div>
      <h1>data of users</h1>
      {users.map((user) => (
        <p>{` (Name ${user.name}) (UserName: ${user.userName}) (id: ${user.id})`}</p>
      ))}
    </div>
  );
};
export default DataOfUsers;





