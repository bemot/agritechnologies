import axios from "axios";
import { reset } from "redux-form";
import history from "../history";
import {
  GET_TECHNOLOGIES,
  GET_TECHNOLOGIE,
  ADD_TECHNOLOGIE,
  DELETE_TECHNOLOGIE,
  EDIT_TECHNOLOGIE,
} from "./types";

// GET TECHNOLOGIES
export const getTechnologies = () => async (dispatch) => {
  const res = await axios.get("/api/technologies/");
  dispatch({
    type: GET_TECHNOLOGIES,
    payload: res.data,
  });
};

// GET TECHNOLOGIE
export const getTechnologie = (id) => async (dispatch) => {
  const res = await axios.get(`/api/technologies/${id}/`);
  dispatch({
    type: GET_TECHNOLOGIE,
    payload: res.data,
  });
};

// ADD TECHNOLOGIE
export const addTechnologie = (formValues) => async (dispatch) => {
  const res = await axios.post("/api/technologies/", { ...formValues });
  dispatch({
    type: ADD_TECHNOLOGIE,
    payload: res.data,
  });
  dispatch(reset("TechnologieForm")); // フォーム送信後、値をクリアする
};

// DELETE TECHNOLOGIE
export const deleteTechnologie = (id) => async (dispatch) => {
  await axios.delete(`/api/technologies/${id}/`);
  dispatch({
    type: DELETE_TECHNOLOGIE,
    payload: id,
  });
  history.push("/technologies");
};

// EDIT TECHNOLOGIE
export const editTechnologie = (id, formValues) => async (dispatch) => {
  const res = await axios.patch(`/api/technologies/${id}/`, formValues);
  dispatch({
    type: EDIT_TECHNOLOGIE,
    payload: res.data,
  });
  history.push("/technologies");
};
