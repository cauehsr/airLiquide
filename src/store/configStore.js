import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from 'airLiquide/src/services/index';
import rootSaga from 'airLiquide/src/store/saga/saga.js';

const sagaMiddleware = createSagaMiddleware();
export default function configStore(onComplete) {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
