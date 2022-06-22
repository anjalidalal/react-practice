import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const { id } = useParams();

  const getUsersDetails = () => {
    setIsLoading(true);
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setUser(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error", err);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    getUsersDetails();
  }, []);

  const handleGoBack = () => {
    navigate("/users");
  };

  return isLoading ? (
    <div>...Loading</div>
  ) : (
    <div className="users">
      <img src={user.avatar} alt="profile" className="image" />
      <div>
        <h3>{`${user.first_name} ${user.last_name}`}</h3>
        <h5>{`Email : ${user.email}`}</h5>
      </div>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export { UserPage };
