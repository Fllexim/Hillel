import { put, takeLatest } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "./authSlice";

function* loginWorker(action) {
  try {
    const { login, password } = action.payload;

    if (login.trim() && password.trim()) {
      const token = "fake-jwt-token";

      localStorage.setItem("token", token);

      yield put(loginSuccess(token));
    } else {
      throw new Error("Invalid login or password");
    }
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, loginWorker);
}
