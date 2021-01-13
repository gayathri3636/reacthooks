import {takeLatest, call} from 'redux-saga/effects';
import * as Types from '../actions/types';
import {GetDataFromServer} from '../services/index';
// const proxyurl = "https://cors-anywhere.herokuapp.com/"
// const backendurl = "http://localhost:8000"
// const baseUrl=proxyurl+backendurl
const baseUrl="http://localhost:8000"
export function* fetchLoginUser(action){
    try{
        let formBody={}
        formBody.username = action.payload.username
        formBody.password=action.payload.password
        const response=yield call(GetDataFromServer,baseUrl, "GET", formBody)
        const result = yield response.json()
        console.log("Result", JSON.stringify(result));
    }catch(err)
{
    console.log(err);
}
}

export function* fetchRegisterUser(action){
    try{
        let formBody={}
        formBody.email = action.payload.email
        formBody.username = action.payload.username
        formBody.password = action.payload.password
        formBody.confirmpassword = action.payload.confirmpassword
        const response = yield call(GetDataFromServer, baseUrl, "POST", formBody)
        const result = yield response.json()
        console.log("Result from registration sagas", JSON.stringify(result));
    } catch(err){
        console.log(err);
    }
}

export default function* rootSaga(params) {
    yield takeLatest(Types.LOGIN_USER, fetchLoginUser);
    yield takeLatest(Types.REGISTER_USER, fetchRegisterUser);
    console.log("ROOT SAGA");  
  }