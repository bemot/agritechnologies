import _ from "lodash";
import {
  GET_VARIABLES,
  GET_VARIABLE,
  ADD_VARIABLE,
  DELETE_VARIABLE,
  EDIT_VARIABLE,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_VARIABLES:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id"),
      };
    case GET_VARIABLE:
    case ADD_VARIABLE:
    case EDIT_VARIABLE:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETE_VARIABLE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
