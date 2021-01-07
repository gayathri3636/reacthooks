import { act } from 'react-dom/test-utils';
import {takeEvery, takeLatest, call, put} from 'redux-saga/effects';
import * as Types from '../actions/types';
import {GetDataFromServer} from '../services/index';
const baseUrl="http://localhost:5000/"
export function* fetchLoginUser(action){
    try{
        let formBody={}
        formBody.username = action.payload.username
        formBody.password=action.payload.password
        const reqMethod="POST"
        const response=yield call(GetDataFromServer,baseUrl, "GET", formBody)
        const result = yield response.json()
        console.log("Result", JSON.stringify(result));
    }catch(err)
{
    console.log(err);
}}

export function* fetchRegisterUser(action){
    try{
        let formBody={}
        formBody.email = action.payload.email
        formBody.username = action.payload.username
        formBody.password = action.payload.password
        formBody.confirmpassword = action.payload.confirmpassword
        const reqMethod = "POST"
        const response = yield call(GetDataFromServer, baseUrl, reqMethod, formBody)
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