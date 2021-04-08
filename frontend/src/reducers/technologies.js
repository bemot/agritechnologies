import _ from "lodash";
import {
  GET_TECHNOLOGIES,
  GET_TECHNOLOGIE,
  ADD_TECHNOLOGIE,
  DELETE_TECHNOLOGIE,
  EDIT_TECHNOLOGIE,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_TECHNOLOGIES:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id"),
      };
    case GET_TECHNOLOGIE:
    case ADD_TECHNOLOGIE:
    case EDIT_TECHNOLOGIE:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETE_TECHNOLOGIE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
