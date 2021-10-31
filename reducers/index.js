import { combineReducers } from 'redux';

import search from './search';
import list from './list';

export default combineReducers({
  search,
  list
});
