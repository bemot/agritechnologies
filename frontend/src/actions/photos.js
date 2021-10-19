import axios from "axios";
import { reset } from "redux-form";
import history from "../history";
import {
  GET_PHOTOS,
  GET_PHOTO,
  ADD_PHOTO,
  DELETE_PHOTO,
  EDIT_PHOTO,
} from "./types";

// GET PHOTOS
export const getPhotos = () => async (dispatch) => {
  const res = await axios.get("/api/photos/");
  dispatch({
    type: GET_PHOTOS,
    payload: res.data,
  });
};

// GET PHOTO
export const getPhoto = (id) => async (dispatch) => {
  const res = await axios.get(`/api/photos/${id}/`);
  dispatch({
    type: GET_PHOTO,
    payload: res.data,
  });
};

// ADD PHOTO
export const addPhoto = (formValues) => async (dispatch) => {
  const res = await axios.post("/api/photos/", { ...formValues });
  dispatch({
    type: ADD_PHOTO,
    payload: res.data,
  });
  dispatch(reset("PhotoForm")); // フォーム送信後、値をクリアする
};

// DELETE PHOTO
export const deletePhoto = (id) => async (dispatch) => {
  await axios.delete(`/api/photos/${id}/`);
  dispatch({
    type: DELETE_PHOTO,
    payload: id,
  });
  history.push("/photos");
};

// EDIT PHOTO
export const editPhoto = (id, formValues) => async (dispatch) => {
  const res = await axios.patch(`/api/photos/${id}/`, formValues);
  dispatch({
    type: EDIT_PHOTO,
    payload: res.data,
  });
  history.push("/photos");
};
