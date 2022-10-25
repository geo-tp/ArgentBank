import {
  GET_USER,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
} from "../constants/user";
import { defaultUserState } from "../states/user";

export const userReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...defaultUserState, isLoading: true };

    case GET_USER_SUCCESS:
      console.log(action.payload.user);
      const user = action.payload.user;
      return {
        ...defaultUserState,
        isLoaded: true,
        ...user,
      };

    case GET_USER_ERROR:
      return {
        ...defaultUserState,
        isError: action.payload.error,
      };

    case UPDATE_USER:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...defaultUserState,
        isLoaded: true,
        ...action.payload.user,
      };

    case UPDATE_USER_ERROR:
      return {
        ...defaultUserState,
        isError: action.payload.error,
      };
    default:
      return state;
  }
};
