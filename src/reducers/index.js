import { combineReducers } from 'redux';
import todos from './addTodo';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos,
  visibilityFilter
  })