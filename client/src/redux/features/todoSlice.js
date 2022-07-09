import { createSlice } from '@reduxjs/toolkit';

export const todo = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    todo: {},
    message: '',
  },
  reducers: {
    // add
    addTodoStart: (state) => state,
    addTodoSuccess: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { addTodoStart, addTodoSuccess } = todo.actions;

export default todo.reducer;
