import _ from "lodash";
import {
  GET_POWERUNITS,
  GET_POWERUNIT,
  ADD_POWERUNIT,
  DELETE_POWERUNIT,
  EDIT_POWERUNIT,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_POWERUNITS:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id"),
      };
    case GET_POWERUNIT:
    case ADD_POWERUNIT:
    case EDIT_POWERUNIT:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETE_POWERUNIT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
