import { composeWithDevTools } from '@redux-devtools/extension';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';

import { todoReducer } from '../features/todo/reducers';

const reducers = combineReducers({
  todo: todoReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware())
);
