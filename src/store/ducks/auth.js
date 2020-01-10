const initialState = {
  token: "",
  user: {},
  status: ""
};

export const typesAuth = {
  AUTH_LOGIN_INIT: "@auth/AUTH_LOGIN_INIT",
  AUTH_LOGIN_SUCCESS: "@auth/AUTH_LOGIN_SUCCESS",
  AUTH_LOGIN_ERROR: "@auth/AUTH_LOGIN_ERROR"
};
export const actionsAuth = {
  authLoginInit: (username, password) => ({
    type: typesAuth.AUTH_LOGIN_INIT,
    payload: {
      username,
      password
    }
  }),
  authLoginSuccess: (token, user) => ({
    type: typesAuth.AUTH_LOGIN_SUCCESS,
    payload: {
      token,
      user
    }
  }),
  authLoginError: () => ({
    type: typesAuth.AUTH_LOGIN_ERROR
  })
};
export const reducersAuth = (state = initialState, action) => {
  switch (action.type) {
    case typesAuth.AUTH_LOGIN_INIT:
      return {
        ...state,
        status: typesAuth.AUTH_LOGIN_INIT
      };
    case typesAuth.AUTH_LOGIN_SUCCESS:
      return {
        token: action.payload.token,
        user: action.payload.user,
        status: typesAuth.AUTH_LOGIN_SUCCESS
      };
    case typesAuth.AUTH_LOGIN_ERROR:
      return {
        ...state,
        status: typesAuth.AUTH_LOGIN_ERROR
      };
    default: {
      return state;
    }
  }
};
