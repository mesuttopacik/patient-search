import {
  SEARCH_PATIENTS
} from '../actions/search';

import {
  SEARCH_REQUEST_SUCCEEDED, SEARCH_REQUEST_FAILED
} from '../events/search';
import { Patient } from '../models/Patient';

const initialState = {
  searchResults: []
};

const mapResultToPatient = patients => {
  let mappedPatients = [];

  patients.forEach(patient => {
    let newPatient = new Patient();

    newPatient.Name = patient.name[0]?.given[0];
    newPatient.Phone = patient.telecom[0]?.value[0];
    newPatient.Gender = patient.gender;
    newPatient.FamilyName = patient.name[0]?.family;

    let address = patient.address[0];
    newPatient.Address = address?.line + ", " + address?.city;

    mappedPatients.push(newPatient);
  });

  return mappedPatients;
};

export default (state = initialState, action) => {
  switch (action.type) {

    // USER ACTIONS
    case SEARCH_PATIENTS: {
      return {
        ...state,
        loadingPatients: true,
      };
    }

    // REDUX SAGA EVENTS
    case SEARCH_REQUEST_SUCCEEDED: {
      return {
        ...state,
        loadingPatients: false,
        searchResults: mapResultToPatient(action.patients)
      };
    }

    //TODO: Alert mechanism for the error
    case SEARCH_REQUEST_FAILED: {
      return {
        ...state,
        loadingPatients: false
      };
    }

    default:
      return state;
  }
};