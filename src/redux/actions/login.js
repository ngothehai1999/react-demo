import { LOGIN_SUCCESS, LOGOUT } from "./type";

export const login = (data) => {
  console.log("data: ",data);
  return {
    type: LOGIN_SUCCESS,
    payload: {
      request:{
        url:'login/',
        method:'POST',
        data: data,
      }
    }
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};