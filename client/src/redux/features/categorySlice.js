import { createSlice } from '@reduxjs/toolkit';

export const category = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    category: {},
    message: '',
  },
  reducers: {
    // add
    addCategoryStart: (state) => state,
    addCategorySuccess: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const {
  addTodoStart,
  addTodoSuccess,
  addCategoryStart,
  addCategorySuccess,
} = category.actions;

export default category.reducer;
