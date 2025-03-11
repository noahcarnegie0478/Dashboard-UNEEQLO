import React from "react";

function LoginForm() {
  return (
    <div>
      <div className="container-form">
        <div className="form-title">
          <h2>Login Form</h2>
        </div>
        <form>
          <label htmlFor="email">email:</label>
          <br />
          <input type="text" id="email" name="email" />
          <br />
          <label htmlFor="password">password:</label>
          <br />
          <input type="text" id="password" name="password" />
        </form>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default LoginForm;
