import { put, takeLatest } from "redux-saga/effects";

import { typesAuth } from "../ducks/auth";

function* login({ payload: { username, password } }) {
  try {
    yield put({
      type: typesAuth.AUTH_LOGIN_SUCCESS,
      payload: {
        token: "KB23JK4B23M,3242M3,4N3M2,32M3232423",
        user: {
          username,
          password
        }
      }
    });
  } catch (e) {
    yield put({ type: typesAuth.AUTH_LOGIN_ERROR, message: e.message });
  }
}

function* watcherAuth() {
  yield takeLatest(typesAuth.AUTH_LOGIN_INIT, login);
}

export default watcherAuth;
