import { all } from 'redux-saga/effects';
import { searchSagas } from './searchSagas';

export default function* rootSaga() {
  yield all([
    ...searchSagas
  ]);
};