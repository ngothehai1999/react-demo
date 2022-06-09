import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/type";

const initState = {
  token:'',
}

const loginReducers = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(action);
      localStorage.setItem('accessToken', action.payload.data.access_token || "")
      return {
        ...state,
        token: action.payload.data.access_token,
      };
    case LOGIN_FAIL:
      return state
    case LOGOUT:
      return {
        ...state,
        token:'',
      };
    default:
      return state;
  }
};

export default loginReducers;