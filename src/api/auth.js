import {
  getConnected,
  getConnectedError,
  getConnectedSuccess,
} from "../store/actions/auth";
import { LOGIN_ERROR } from "./utils/messages";
import { formatRequestParameters } from "./utils/formatters";
import { LOGIN_ROUTE } from "./utils/routes";

export function loginAttempt(email, password) {
  return (dispatch) => {
    dispatch(getConnected());

    const params = formatRequestParameters("POST", { email, password });

    return fetch(LOGIN_ROUTE, params)
      .then((response) => {
        if (!response.ok) {
          throw LOGIN_ERROR;
        }

        return response.json();
      })
      .then((data) => {
        const token = data.body.token;
        dispatch(getConnectedSuccess(token));
      })

      .catch((error) => {
        dispatch(getConnectedError(error));
      });
  };
}
