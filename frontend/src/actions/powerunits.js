import axios from "axios";
import { reset } from "redux-form";
import history from "../history";
import {
  GET_POWERUNITS,
  GET_POWERUNIT,
  ADD_POWERUNIT,
  DELETE_POWERUNIT,
  EDIT_POWERUNIT,
} from "./types";

// GET POWERUNITS
export const getPowerunits = () => async (dispatch) => {
  const res = await axios.get("/api/powerunits/");
  dispatch({
    type: GET_POWERUNITS,
    payload: res.data,
  });
};

// GET POWERUNIT
export const getPowerunit = (id) => async (dispatch) => {
  const res = await axios.get(`/api/powerunits/${id}/`);
  dispatch({
    type: GET_POWERUNIT,
    payload: res.data,
  });
};

// ADD POWERUNIT
export const addPowerunit = (formValues) => async (dispatch) => {
  const res = await axios.post("/api/powerunits/", { ...formValues });
  dispatch({
    type: ADD_POWERUNIT,
    payload: res.data,
  });
  dispatch(reset("PowerunitForm")); // フォーム送信後、値をクリアする
};

// DELETE POWERUNIT
export const deletePowerunit = (id) => async (dispatch) => {
  await axios.delete(`/api/powerunits/${id}/`);
  dispatch({
    type: DELETE_POWERUNIT,
    payload: id,
  });
  history.push("/powerunits");
};

// EDIT POWERUNIT
export const editPowerunit = (id, formValues) => async (dispatch) => {
  const res = await axios.patch(`/api/powerunits/${id}/`, formValues);
  dispatch({
    type: EDIT_POWERUNIT,
    payload: res.data,
  });
  history.push("/powerunits");
};
