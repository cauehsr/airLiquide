import axios from 'axios';
import {call, takeEvery, put, all} from 'redux-saga/effects';


export function* loadingTask() {
  try {
    yield put({type: 'FETCH'});
    const response = yield call(
      axios.get,
      'https://my.api.mockaroo.com/epilist?key=52d6c330',
    );
    yield put({type: 'SUCCESSED', listTodo: response.data});
  } catch (err) {
    console.log(err);
  }
}

export function* watchTodo() {
  yield takeEvery('LOAD', loadingTask);
}

export default function* rootSaga() {
  yield all([watchTodo()]);
}
