import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import authReducer from "./auth/authSlice";
import productsReducer from "./products/productsSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
