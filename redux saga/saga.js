import { put, takeEvery } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from './actions';
import { FETCH_DATA_REQUEST } from './actionTypes';

function* fetchDataSaga() {
  try {
    const response = yield fetch('https://api.example.com/data');
    const data = yield response.json();

    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

export function* watchFetchData() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchDataSaga);
}
