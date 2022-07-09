import { combineReducers } from 'redux';
import todoSlice from './todoSlice';
import categorySlice from './categorySlice';

export default combineReducers({
  todoSlice: todoSlice,
  categorySlice: categorySlice,
});
