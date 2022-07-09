import { all, put, call, takeLatest } from 'redux-saga/effects';

import {
  addCategoryStart,
  addCategorySuccess,
} from '../features/categorySlice';

import { addCategoryAPI } from '../../api/category';

// saga 1
function* onAddCategory({ payload: { category, callback } }) {
  try {
    const { status, data } = yield call(addCategoryAPI, category);

    if (status === 201) {
      yield put(addCategorySuccess({ ...data }));
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
  yield all([takeLatest(addCategoryStart, onAddCategory)]);
}

export default Todos;
