import apiClient from '../helper/apiClient';

const login = (data) =>  apiClient().post('login/', data)
  .then((res) => res.json()) 
  .then((response) => {
    console.log(response);
    if(response.data.access_token) {
        localStorage.setItem("user", JSON.stringify({
          access_token: response.data.access_token,
        }),
      );
    }
    return response;
  },
  (err) =>{
    console.log(err);
    return err;
  })

 
const logout = () => {
  localStorage.removeItem("user");
};

const LoginService = {
  login,
  logout,
};

export default LoginService;