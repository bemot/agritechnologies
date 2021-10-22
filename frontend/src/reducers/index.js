import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import technologies from "./technologies";
import operations from "./operations";
import variables from "./variables";
import units from "./units";
import machines from "./machines";
import photos from "./photos";
import powerunits from "./powerunits";

export default combineReducers({
  form: formReducer,
  technologies,
  operations,
  variables,
  units,
  machines,
  photos,
  powerunits,
});
