import {
  SHOW_SEARCH_MODAL,
  HIDE_SEARCH_MODAL
} from '../actions/list';

const initialState = {
  isSearchModalActive: false
};

export default (state = initialState, action) => {
  switch (action.type) {

    // USER ACTIONS
    case SHOW_SEARCH_MODAL: {
      return {
        ...state,
        isSearchModalActive: true,
      };
    }

    case HIDE_SEARCH_MODAL: {
      return {
        ...state,
        isSearchModalActive: false,
      };
    }

    default:
      return state;
  }
};