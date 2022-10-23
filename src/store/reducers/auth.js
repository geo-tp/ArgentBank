import {
  GET_CONNECTED,
  GET_CONNECTED_ERROR,
  GET_CONNECTED_SUCCESS,
} from "../constants/auth";
import { authDefaultState } from "../states/auth";

export const authReducer = (state = authDefaultState, action) => {
  switch (action.type) {
    case GET_CONNECTED:
      console.log("IN GET CO");
      return {
        ...state,
        isLoading: true,
        isConnected: false,
        token: false,
        isError: false,
      };

    case GET_CONNECTED_SUCCESS:
      console.log("IN GET CO SUCCESS");

      return {
        ...state,
        isLoading: false,
        isError: false,
        isConnected: true,
        token: action.payload.token,
      };

    case GET_CONNECTED_ERROR:
      console.log("IN GET CO ERROR");

      return {
        ...state,
        isLoading: false,
        isError: action.payload.error,
        isConnected: false,
        token: null,
      };
    default:
      return state;
  }
};
