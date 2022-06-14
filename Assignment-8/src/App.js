import React, { useContext } from "react";
import First from "./components/First";
import { AuthContext } from "./contexts/AuthContext";

const App = () => {
  const { token, handleTokenChange } = useContext(AuthContext);

  if (!token) {
    return (
      <div>
        <h4>User not logged in. Please login to continue:</h4>
        <input type="text" />
        <input type="password" />
        <button
          onClick={() => {
            handleTokenChange("hey there");
          }}
        >
          Submit
        </button>
      </div>
    );
  }

  return <First />;
};

export default App;
