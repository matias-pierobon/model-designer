import { call, put, takeEvery } from 'redux-saga/effects'

function* fetchUser(action) {
    try {
      //  const user = yield call(Api.fetchUser, action.payload.userId);
       yield put({type: "USER_FETCH_SUCCEEDED", user: action.payload.userId});
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }
 
 
 export default function* saga() {
   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
 }
