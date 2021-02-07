import React from "react";
const Login = () => {
  const onChange = () => {
    console.log("escribiendo");
  };
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Login</h1>
        <form>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your email"
              onChange={onChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
