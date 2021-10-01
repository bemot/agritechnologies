import axios from "axios";
import { reset } from "redux-form";
import history from "../history";
import {
  GET_VARIABLES,
  GET_VARIABLE,
  ADD_VARIABLE,
  DELETE_VARIABLE,
  EDIT_VARIABLE,
} from "./types";

// GET VARIABLES
export const getVariables = () => async (dispatch) => {
  const res = await axios.get("/api/variables/");
  dispatch({
    type: GET_VARIABLES,
    payload: res.data,
  });
};

// GET VARIABLE
export const getVariable = (id) => async (dispatch) => {
  const res = await axios.get(`/api/variables/${id}/`);
  dispatch({
    type: GET_VARIABLE,
    payload: res.data,
  });
};

// ADD VARIABLE
export const addVariable = (formValues) => async (dispatch) => {
  const res = await axios.post("/api/variables/", { ...formValues });
  dispatch({
    type: ADD_VARIABLE,
    payload: res.data,
  });
  dispatch(reset("VariableForm")); // フォーム送信後、値をクリアする
};

// DELETE VARIABLE
export const deleteVariable = (id) => async (dispatch) => {
  await axios.delete(`/api/variables/${id}/`);
  dispatch({
    type: DELETE_VARIABLE,
    payload: id,
  });
  history.push("/variables");
};

// EDIT VARIABLE
export const editVariable = (id, formValues) => async (dispatch) => {
  const res = await axios.patch(`/api/variables/${id}/`, formValues);
  dispatch({
    type: EDIT_VARIABLE,
    payload: res.data,
  });
  history.push("/variables");
};
