import axios from "axios";

export const fetchPatients = searchParams => {
  const url = "https://fhir.imagerad.com/dummy/Patient/?";

  const options = {
    headers: {
      'content-type': 'application/fhir+json'
    }
  };

  return axios.get(url, { params: searchParams, options: options});
}