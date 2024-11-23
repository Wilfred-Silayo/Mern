import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const {email, password} = formdata;
  const onChange = (e) => {
    setFormData((prevState)=>({...prevState,
      [e.target.name]:e.target.value
    }))
  };
  const onSubmit =(e)=>{
    e.preventDefault()
  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
          Login
        </h1>
        <p>Please login to create goals</p>

        <section className="form">
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={onChange}
              />
            </div>
          
            <div className="form-group">
              <button type="submit" className="btn btn-block" onSubmit={onSubmit}>
                Login
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}

export default Login;
