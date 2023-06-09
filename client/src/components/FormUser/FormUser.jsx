import React, { useState } from "react";
import "./FormUser.css";
import validation from "./validation";

const Form = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });

    setErrors(validation({ ...userData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.login(userData);
}

  return (
    <div className="form-cont">
      <form className="form" onSubmit={handleSubmit}>
        <div className="label-cont">
          <label>Email: </label>
          <input
            className="login-inp"
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </div>
          <p className="err">{errors.username && errors.username}</p>
        <div className="label-cont">
          <label>Password: </label>
          <input
            className="psw login-inp"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <p className="err">{errors.password && errors.password}</p>
        <button className="login-btn" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Form;
