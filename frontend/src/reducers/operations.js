import _ from "lodash";
import {
  GET_OPERATIONS,
  GET_OPERATION,
  ADD_OPERATION,
  DELETE_OPERATION,
  EDIT_OPERATION,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_OPERATIONS:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id"),
      };
    case GET_OPERATION:
    case ADD_OPERATION:
    case EDIT_OPERATION:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETE_OPERATION:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
