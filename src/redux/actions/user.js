import * as types from './type';

export const UserInfo = () =>{
    return {
        types: [
            types.USER_INFO_RETRIEVE_REQUESTED,
            types.USER_INFO_RETRIEVE_SUCCEEDED,
            types.USER_INFO_RETRIEVE_FAILED
        ],
        payload:{
            request: {
                method: 'GET',
                url: '/user/publicInfo',
            },
        },
    };
};