import {
  GET_USER,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
} from "../constants/user";
import { userDefaultState } from "../states/user";

export const userReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...userDefaultState, isLoading: true };

    case GET_USER_SUCCESS:
      const user = action.payload.user;
      return {
        ...userDefaultState,
        isLoaded: true,
        ...user,
      };

    case GET_USER_ERROR:
      return {
        ...userDefaultState,
        isError: action.payload.error,
      };

    case UPDATE_USER:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...userDefaultState,
        isLoaded: true,
        ...action.payload.user,
      };

    case UPDATE_USER_ERROR:
      return {
        ...userDefaultState,
        isError: action.payload.error,
      };
    default:
      return state;
  }
};
