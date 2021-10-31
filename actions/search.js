export const SEARCH_PATIENTS = 'SEARCH_PATIENTS';

export const searchPatients = searchParams => ({
  type: SEARCH_PATIENTS,
  searchParams: searchParams,
});