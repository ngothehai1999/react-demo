import {GET_USERNAME} from './type';

export const UserInfo = () =>{
    return {
        type: GET_USERNAME,
        payload:{
            request: {
                method: 'GET',
                url: '/user/publicInfo',
            },
        },
    };
};