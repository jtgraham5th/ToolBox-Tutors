import history from '../history'
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_TUTOR,
  DELETE_TUTOR,
  EDIT_TUTOR,
  FETCH_COURSES,
  FETCH_COURSE
} from "./types";
import courses from "../apis/courses";
import axios from 'axios'

export const tutorRegistration = (body) => {
  return (dispatch) => {
    axios.post('http://localhost:8000/tutorRegistration', body);
  };
};

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
export const createTutor = formValues => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await courses.post("/courses", { ...formValues, userId });

    dispatch({ type: CREATE_TUTOR, payload: response.data });
    history.push("/");
  };
};

export const fetchCourses = () => {
  return async dispatch => {
    const response = await courses.get("/courses");

    dispatch({ type: FETCH_COURSES, payload: response.data });
  };
};

export const fetchCourse = subject => {
  return async dispatch => {
    const response = await courses.get(`/courses/${subject}`);

    dispatch({ type: FETCH_COURSE, payload: response.data });
  };
};
export const editTutor = (id, formValues) => {
  return async dispatch => {
    const response = await courses.patch(`/courses/${id}`, formValues);

    dispatch({ type: EDIT_TUTOR, payload: response.data });
    history.push("/");

  };
};

export const deleteTutor = id => {
  return async dispatch => {
    await courses.delete(`/courses/${id}`);

    dispatch({ type: DELETE_TUTOR, payload: id });
    history.push("/");

  };
};
