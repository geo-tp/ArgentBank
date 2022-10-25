import {
  GET_CONNECTED,
  GET_CONNECTED_ERROR,
  GET_CONNECTED_SUCCESS,
  GET_DISCONNECTED,
} from "../constants/auth";
import { authDefaultState } from "../states/auth";

export const authReducer = (state = authDefaultState, action) => {
  switch (action.type) {
    case GET_CONNECTED:
      return {
        ...state,
        isLoading: true,
        isConnected: false,
        token: false,
        isError: false,
      };

    case GET_CONNECTED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isConnected: true,
        token: action.payload.token,
      };

    case GET_CONNECTED_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.error,
        isConnected: false,
        token: null,
      };

    case GET_DISCONNECTED:
      return {
        ...authDefaultState,
      };

    default:
      return state;
  }
};
