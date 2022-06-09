import {GET_USERNAME} from '../actions/type';

const initState ={
    username : '',
    fullname: "",
    email: "",
    chucVu: "",
    branch: null,
    roles: []
}

const userInfo = (state = initState, action) =>{
    switch(action.type){
        case GET_USERNAME:
            return {
                ...state,
                username : action.payload.data.username, 
                fullname : action.payload.data.fullname,
                email : action.payload.data.email,
                chucVu : action.payload.data.chucVu,
                branch : action.payload.data.branch,
                roles : action.payload.data.roles,
            }
        default:
            return state;
    }
}
export default userInfo;
