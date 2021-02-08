import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, saveUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

const onSubmit = e =>{
  e.preventdefault();

}


  return (
    <div className="form-user">
      <div className="container-form shadow-dark">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <div className="field-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="your email"
              onChange={onChange}
            />
          </div>
          <div className="field-form">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="your password"
              onChange={onChange}
            />
          </div>
          <div className="field-form">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Login"
            />
          </div>
        </form>
        <Link to={'/new-account'} className="link-account">Get account</Link>
      </div>
    </div>
  );
};

export default Login;
