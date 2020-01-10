import { combineReducers } from "redux";

import { reducersAuth } from "./auth";

const rootReducers = combineReducers({
  auth: reducersAuth
});

export default rootReducers;
