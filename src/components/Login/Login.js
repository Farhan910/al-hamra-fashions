import React from "react";
import './Login.css'
const Login = () => {
  return (
    <div>
      <input
        className="form"
        type="text"
        placeholder="Username"
        name="Username"
        required
      />{" "}
      <br />
      <input className="form" type="text" placeholder="Password" name="Password" required />{" "}
      <br />
      <input className=" button btn-success" type="button" value="Submit" />
    </div>
  );
};

export default Login;
