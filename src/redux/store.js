import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import user from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const createDebugger = require('redux-flipper').default;

const rootReducer = combineReducers({
  user
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(sagaMiddleware).concat(createDebugger()),
});
sagaMiddleware.run(rootSaga);

export default store;
