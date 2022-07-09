import { all, put, call, takeLatest } from 'redux-saga/effects';

import { addTodoStart, addTodoSuccess } from '../features/todoSlice';

import { addTodoAPI } from '../../api/todo';

// saga 1
function* onAddTodo({ payload: { todo, callback } }) {
  try {
    const { status, data } = yield call(addTodoAPI, todo);

    if (status === 201) {
      yield put(addTodoSuccess({ ...data }));
    }

    if (callback) {
      callback({ error: null, data });
    }
  } catch ({ response }) {
    const { title, message } = response.data;

    const error = {
      title,
      message: message ? message : response?.statusText || 'Error. Try again',
    };
    if (callback) {
      callback({ error, data: null });
    }
  }
}

function* Todos() {
  yield all([takeLatest(addTodoStart, onAddTodo)]);
}

export default Todos;
