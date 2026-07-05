import { all } from "redux-saga/effects";
import authSaga from "./auth/authSaga";
import productsSaga from "./products/productsSaga";

export default function* rootSaga() {
  yield all([authSaga(), productsSaga()]);
}
