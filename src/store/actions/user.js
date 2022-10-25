import {
  GET_USER,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
} from "../constants/user";

export const getUser = () => ({
  type: GET_USER,
  payload: {},
});

export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: { user },
});

export const getUserError = (error) => ({
  type: GET_USER_ERROR,
  payload: { error },
});

export const updateUser = () => ({
  type: UPDATE_USER,
  payload: {},
});

export const updateUserSuccess = (user) => ({
  type: UPDATE_USER_SUCCESS,
  payload: { user },
});

export const updateUserError = (error) => ({
  type: UPDATE_USER,
  payload: { error },
});
