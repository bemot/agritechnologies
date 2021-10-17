import axios from "axios";
import { reset } from "redux-form";
import history from "../history";
import {
  GET_MACHINES,
  GET_MACHINE,
  ADD_MACHINE,
  DELETE_MACHINE,
  EDIT_MACHINE,
} from "./types";

// GET MACHINES
export const getMachines = () => async (dispatch) => {
  const res = await axios.get("/api/machines/");
  dispatch({
    type: GET_MACHINES,
    payload: res.data,
  });
};

// GET MACHINE
export const getMachine = (id) => async (dispatch) => {
  const res = await axios.get(`/api/machines/${id}/`);
  dispatch({
    type: GET_MACHINE,
    payload: res.data,
  });
};

// ADD MACHINE
export const addMachine = (formValues) => async (dispatch) => {
  const res = await axios.post("/api/machines/", { ...formValues });
  dispatch({
    type: ADD_MACHINE,
    payload: res.data,
  });
  dispatch(reset("MachineForm")); // フォーム送信後、値をクリアする
};

// DELETE MACHINE
export const deleteMachine = (id) => async (dispatch) => {
  await axios.delete(`/api/machines/${id}/`);
  dispatch({
    type: DELETE_MACHINE,
    payload: id,
  });
  history.push("/machines");
};

// EDIT MACHINE
export const editMachine = (id, formValues) => async (dispatch) => {
  const res = await axios.patch(`/api/machines/${id}/`, formValues);
  dispatch({
    type: EDIT_MACHINE,
    payload: res.data,
  });
  history.push("/machines");
};
