import { all, fork } from 'redux-saga/effects';
import todoSaga from './todoSaga';

function* saga() {
  yield all([fork(todoSaga)]);
}

export default saga;
