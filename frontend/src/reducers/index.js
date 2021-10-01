import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import technologies from "./technologies";
import operations from "./operations";
import variables from "./variables";
export default combineReducers({
  form: formReducer,
  technologies,
  operations,
  variables,
});
