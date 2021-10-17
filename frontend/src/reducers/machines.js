import _ from "lodash";
import {
  GET_MACHINES,
  GET_MACHINE,
  ADD_MACHINE,
  DELETE_MACHINE,
  EDIT_MACHINE,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_MACHINES:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id"),
      };
    case GET_MACHINE:
    case ADD_MACHINE:
    case EDIT_MACHINE:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETE_MACHINE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
