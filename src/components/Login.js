import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {toast} from 'react-toastify';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

import { login } from "../redux/actions/login";

import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
    console.log(username + ","+ password);

      toast.error("Vui lòng nhập đủ tên đăng nhập và mật khẩu!",{
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
    const data = {
      username: username,
      password: password,
    };

    dispatch(await login(data)).then(res => {
      toast.success("Đăng nhập thành công", {
          position: toast.POSITION.TOP_RIGHT
      });
      navigate("/home");
  }).catch((err) => {
      toast.error(err.error.response.data.message, {
          position: toast.POSITION.TOP_RIGHT
      });
  })
  };

  return (
    <div className="App">
      <form onSubmit={handleLogin}>
        <label>
          <p>Username</p>
          <input
            type="text"
            name="username"
            onInput={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            onInput={(e) => setPassword(e.target.value)}
          />
        </label>
 
        <div className="form-group">
          <button className="btn btn-primary btn-block" type="submit">
            <span>Login</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;