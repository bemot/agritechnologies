import _ from "lodash";
import {
  GET_UNITS,
  GET_UNIT,
  ADD_UNIT,
  DELETE_UNIT,
  EDIT_UNIT,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_UNITS:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id"),
      };
    case GET_UNIT:
    case ADD_UNIT:
    case EDIT_UNIT:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETE_UNIT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
