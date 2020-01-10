import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducers from "./ducks";
import rootSagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSagas);

export default store;
