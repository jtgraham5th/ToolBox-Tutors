import _ from "lodash";
import {
  FETCH_COURSE,
  FETCH_COURSES,
  EDIT_TUTOR,
  DELETE_TUTOR
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return action.payload.data;
    case FETCH_COURSE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_TUTOR:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TUTOR:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
