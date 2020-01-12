import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { reducersAuth } from "./auth";

const rootReducers = combineReducers({
  auth: reducersAuth,
  form: formReducer
});

export default rootReducers;
