import React from "react";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState(" sancristma@gmail.com");
  const [password, setPassword] = useState("********");
  return (
    <div className="login-form">
      <form>
        <div className="form-control">
          <div>
            <h2>Email</h2>
            <input
              type="text"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <h2>Password</h2>
            <input
              type="password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {/* <div className=" checkbox">*/}
          <div className="checkbox">
            <input type="checkbox" />
            Agree to <a href="#"> Privacy Policy</a>
          </div>
        </div>
        <div>
          <button className="btn-1">Login</button>
        </div>
      </form>
    </div>
  );
}
