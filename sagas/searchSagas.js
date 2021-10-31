import { takeEvery, call, put, select, delay } from 'redux-saga/effects';
import { fetchPatients } from '../services/PatientProvider';

import {
  SEARCH_PATIENTS,
} from '../actions/search';
import {
  SEARCH_REQUEST_SUCCEEDED,
  SEARCH_REQUEST_FAILED,
} from '../events/search';

const getPatients = function* (action) {
  try {
    const response = yield call(fetchPatients, action.searchParams);
    if (response.data.issue) {
      yield put({ type: SEARCH_REQUEST_FAILED, error: response });
    } else {
      yield put({ type: SEARCH_REQUEST_SUCCEEDED, patients: response.data.entry.map(item => item.resource) });
    } 
  } catch (error) {
    if(error == "Cancel") return;
    yield put({ type: SEARCH_REQUEST_FAILED, error: error.message });
  }
};

export const searchSagas = [
  takeEvery(SEARCH_PATIENTS, getPatients),
];