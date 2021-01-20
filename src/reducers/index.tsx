import { combineReducers } from "redux";

import dataReducer, { Data } from "./dataReducer";

export default combineReducers({
  data: dataReducer,
});

export interface State {
  data: Data;
}
