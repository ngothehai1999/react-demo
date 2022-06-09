import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import {configureStore} from '@reduxjs/toolkit';

import {logout} from "../actions/login";
import userInfo from "./user";
import loginReducers from "./login";

// import { combineReducers } from "redux";
// import loginReducers from "./login";
// import userReducer from "./user";

const client = axios.create({ 
  headers: {
      "Content-Type": "application/json",
  },
  baseURL: 'http://10.254.61.24:8095/api/',
  responseType: 'json'
});

client.interceptors.request.use(
  (config) => {
      const token = localStorage.getItem("accessToken")
      if (token) {
          config.headers["Authorization"] = 'Bearer ' + token;  
      }
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);
const middlewareConfig = {
  returnRejectedPromiseOnError: true,
  interceptors: {
      response: [{
          success: function ({getState, dispatch, getSourceAction}, req) {
              return req
          },
          error: function ({getState, dispatch, getSourceAction}, error) {
              dispatch(logout())
              return Promise.reject(error)
          }
      }
      ]
  }
};
export default configureStore({
  reducer: {
      login: loginReducers,
      userInfo: userInfo,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(axiosMiddleware(client, middlewareConfig)),

});
// const allReducers = combineReducers({
//   login: loginReducers,
//   user: userReducer,
// });

// export default allReducers;