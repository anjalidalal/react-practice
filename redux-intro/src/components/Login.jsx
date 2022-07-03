import React from "react";

export const Login = () => {
  return (
    <div>
      <h3>Login Form</h3>
      <form>
        <input type="email" placeholder="Email" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
