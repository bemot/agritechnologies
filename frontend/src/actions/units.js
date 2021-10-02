import axios from "axios";
import { reset } from "redux-form";
import history from "../history";
import { GET_UNITS, GET_UNIT, ADD_UNIT, DELETE_UNIT, EDIT_UNIT } from "./types";

// GET UNITS
export const getUnits = () => async (dispatch) => {
  const res = await axios.get("/api/units/");
  dispatch({
    type: GET_UNITS,
    payload: res.data,
  });
};

// GET UNIT
export const getUnit = (id) => async (dispatch) => {
  const res = await axios.get(`/api/units/${id}/`);
  dispatch({
    type: GET_UNIT,
    payload: res.data,
  });
};

// ADD UNIT
export const addUnit = (formValues) => async (dispatch) => {
  const res = await axios.post("/api/units/", { ...formValues });
  dispatch({
    type: ADD_UNIT,
    payload: res.data,
  });
  dispatch(reset("UnitForm")); // フォーム送信後、値をクリアする
};

// DELETE UNIT
export const deleteUnit = (id) => async (dispatch) => {
  await axios.delete(`/api/units/${id}/`);
  dispatch({
    type: DELETE_UNIT,
    payload: id,
  });
  history.push("/units");
};

// EDIT UNIT
export const editUnit = (id, formValues) => async (dispatch) => {
  const res = await axios.patch(`/api/units/${id}/`, formValues);
  dispatch({
    type: EDIT_UNIT,
    payload: res.data,
  });
  history.push("/units");
};
