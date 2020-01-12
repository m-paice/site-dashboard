import { put, takeLatest, call } from "redux-saga/effects";

import { create } from "../../services/api";

import { typesAuth } from "../ducks/auth";

function* login({ payload: { username, password } }) {
  try {
    const response = yield call(create, "/auth", { username, password });

    yield put({
      type: typesAuth.AUTH_LOGIN_SUCCESS,
      payload: {
        token: response.data.token,
        user: response.data.user
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
