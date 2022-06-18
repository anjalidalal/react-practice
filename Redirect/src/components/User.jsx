import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error", err);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return isLoading ? (
    <div>...Loading</div>
  ) : (
    <>
      <h3>Users</h3>
      {users.map((user) => (
        <Link
          key={user.id}
          to={`/users/${user.id}`}
        >{`${user.first_name} ${user.last_name}`}</Link>
      ))}
    </>
  );
};

export { User };
