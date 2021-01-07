import * as Types from '../actions/types';

const initialState = {
    result:{}
}

const registerUser = (state, action) => {
    console.log("Redux........", JSON.stringify(action))
    let newState = {...state};
    if(action.payload !== undefined){
        newState = Object.assign({}, state, {
            result:{...action.payload}
        })
    }
    return {...newState}
}

export default (state=initialState, action) => {
    switch(action.type){
        case Types.REGISTER_USER:
            return registerUser(state, action)
        default:
            return state;
    }
}