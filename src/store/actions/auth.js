import {
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_ERROR,
  CREATE_ACCOUNT_SUCCESS,
  GET_CONNECTED,
  GET_CONNECTED_ERROR,
  GET_CONNECTED_SUCCESS,
  GET_DISCONNECTED,
  GET_DISCONNECTED_ERROR,
  GET_DISCONNECTED_SUCCESS,
} from "../constants/auth";

export const getConnected = (mail, password) => ({
  type: GET_CONNECTED,
  payload: { mail, password },
});

export const getConnectedSuccess = (token) => ({
  type: GET_CONNECTED_SUCCESS,
  payload: { token },
});

export const getConnectedError = (error) => ({
  type: GET_CONNECTED_ERROR,
  payload: { error },
});

export const getDisconnected = () => ({
  type: GET_DISCONNECTED,
  payload: {},
});

export const getDisconnectedError = (error) => ({
  type: GET_DISCONNECTED_ERROR,
  payload: { error },
});

export const getDisconnectedSuccess = () => ({
  type: GET_DISCONNECTED_SUCCESS,
  payload: {},
});

export const createAccount = (registrationInfos) => ({
  type: CREATE_ACCOUNT,
  payload: { registrationInfos: registrationInfos },
});

export const createAccountError = (error) => ({
  type: CREATE_ACCOUNT_ERROR,
  payload: { error: error },
});

export const createAccountSuccess = () => ({
  type: CREATE_ACCOUNT_SUCCESS,
  payload: {},
});
