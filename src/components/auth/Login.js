import React from "react";
const Login = () => {
  const onChange = () => {
    console.log("escribiendo");
  };
  return (
    <div className="form-user">
      <div className="container-form shadow-dark">
        <h1>Login</h1>
        <form>
          <div className="field-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
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
      </div>
    </div>
  );
};

export default Login;
