import { combineReducers } from 'redux';

import { todoReducer } from './todo/reducers';

export const reducers = combineReducers({
  todo: todoReducer,
});
