// 통합 관리

import { combineReducers } from 'redux';
import todo from './modules/todo';
import weightReducer from './modules/weight';

export default combineReducers({
  todo,
  weightReducer,
});
