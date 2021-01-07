import * as types from './types';

export const loginUser = (user)=>{
    return{
    type:types.LOGIN_USER,
    payload:user
    }
}

export const loginSuccess = () => {
    return{
        type:types.LOGIN_SUCCESS
    }
}

export const loginError = (error) => {
    return{
        type:types.LOGIN_ERROR,
        error:error
    }
}

export const registerUser = (user) => {
    return{
        type: types.REGISTER_USER,
        payload:user
    }
}