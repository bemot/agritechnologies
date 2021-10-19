import _ from "lodash";
import {
  GET_PHOTOS,
  GET_PHOTO,
  ADD_PHOTO,
  DELETE_PHOTO,
  EDIT_PHOTO,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id"),
      };
    case GET_PHOTO:
    case ADD_PHOTO:
    case EDIT_PHOTO:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETE_PHOTO:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
