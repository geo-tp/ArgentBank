import {
  getUser,
  getUserError,
  getUserSuccess,
  updateUser,
  updateUserError,
  updateUserSuccess,
} from "../store/actions/user";
import { PROFILE_ERROR, PROFILE_UPDATE_ERROR } from "./utils/messages";
import { formatRequestParameters } from "./utils/formatters";
import { USER_ROUTE } from "./utils/routes";

export function fetchUserProfile() {
  return (dispatch) => {
    dispatch(getUser());

    const params = formatRequestParameters("POST", {});

    return fetch(USER_ROUTE, params)
      .then((response) => {
        if (!response.ok) {
          throw PROFILE_ERROR;
        }

        return response.json();
      })
      .then((data) => {
        const user = data.body;
        dispatch(getUserSuccess(user));
      })

      .catch((error) => {
        dispatch(getUserError(error));
      });
  };
}

export function fetchUserUpdate(firstName, lastName) {
  return (dispatch) => {
    dispatch(updateUser());

    const params = formatRequestParameters("PUT", { firstName, lastName });

    return fetch(USER_ROUTE, params)
      .then((response) => {
        if (!response.ok) {
          throw PROFILE_UPDATE_ERROR;
        }

        return response.json();
      })
      .then((data) => {
        const user = data.body;
        dispatch(updateUserSuccess(user));
      })

      .catch((error) => {
        dispatch(updateUserError(error));
      });
  };
}
