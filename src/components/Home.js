import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LoginService from "../services/login.service";
import { logout } from "../redux/actions/login";
import  {UserInfo}  from "../redux/actions/user";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userInfo); 
  
  useEffect(() => {
    console.log(user);
    dispatch(UserInfo());
  },[])


  const handleLogout = (e) => {
    e.preventDefault();
    LoginService.logout();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="login-wrapper">
      {/* <h2>Welcome {user.username ?? ""}</h2> */}
      <div className="form-group">
        <button
          className="btn btn-primary btn-block"
          type="submit"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </div>
  );
}