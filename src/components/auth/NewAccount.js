import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewAccount= () => {
  const [user, saveUser] = useState({
    name:'',
    email: "",
    password: "",
    confirmPassword:''
  });

  const { name, email, password, confirmPassword } = user;

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
        <h1>New Account</h1>
        <form onSubmit={onSubmit}>
          <div className="field-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="your name"
              onChange={onChange}
            />
          </div>
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
            <label htmlFor="password">Password</label>
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
            <label htmlFor="confirmPassword">Repeat Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="repeat your password"
              onChange={onChange}
            />
          </div>
          <div className="field-form">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Sign in"
            />
          </div>
        </form>
        <Link to={'/'} className="link-account">Login</Link>
      </div>
    </div>
  );
};

export default NewAccount;
