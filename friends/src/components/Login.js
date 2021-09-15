import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router";

const initialState = {
  credentials: {
    username: "",
    password: ""
  },
  isLoading: false
};

const Login = (props) => {
  const [loginState, setLoginState] = useState(initialState);

  const handleChange = (e) => {
    setLoginState({
      ...loginState,
      credentials: {
        ...loginState.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = (e) => {
    e.preventDefault();
    // setLoginState({ ...loginState, isLoading: true });

    axios
      .post("http://localhost:5000/api/login", loginState.credentials)
      .then((res) => {
        console.log(res.data.payload);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {!loginState.isLoading ? (
        <form onSubmit={login}>
          <input type="text" name="username" value={loginState.credentials.username} onChange={handleChange} />
          <input type="password" name="password" value={loginState.credentials.password} onChange={handleChange} />
          <button>Log In</button>
        </form>
      ) : (
        <div>isLoading</div> // spinner/loadingbar
      )}
    </div>
  );
};

export default Login;
