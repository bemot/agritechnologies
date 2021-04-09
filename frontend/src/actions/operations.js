import axios from "axios";
import { reset } from "redux-form";
import history from "../history";
import {
  GET_OPERATIONS,
  GET_OPERATION,
  ADD_OPERATION,
  DELETE_OPERATION,
  EDIT_OPERATION,
} from "./types";

// GET OPERATIONS
export const getOperations = () => async (dispatch) => {
  const res = await axios.get("/api/operations/");
  dispatch({
    type: GET_OPERATIONS,
    payload: res.data,
  });
};

// GET OPERATION
export const getOperation = (id) => async (dispatch) => {
  const res = await axios.get(`/api/operations/${id}/`);
  dispatch({
    type: GET_OPERATION,
    payload: res.data,
  });
};

// ADD OPERATION
export const addOperation = (formValues) => async (dispatch) => {
  const res = await axios.post("/api/operations/", { ...formValues });
  dispatch({
    type: ADD_OPERATION,
    payload: res.data,
  });
  dispatch(reset("OperationForm")); // フォーム送信後、値をクリアする
};

// DELETE OPERATION
export const deleteOperation = (id) => async (dispatch) => {
  await axios.delete(`/api/operations/${id}/`);
  dispatch({
    type: DELETE_OPERATION,
    payload: id,
  });
  history.push("/");
};

// EDIT OPERATION
export const editOperation = (id, formValues) => async (dispatch) => {
  const res = await axios.patch(`/api/operations/${id}/`, formValues);
  dispatch({
    type: EDIT_OPERATION,
    payload: res.data,
  });
  history.push("/");
};
