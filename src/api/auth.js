import {
  getConnected,
  getConnectedError,
  getConnectedSuccess,
} from "../store/actions/auth";
import { formatRequestParameters } from "./utils/formatters";
import { LOGIN_ROUTE } from "./utils/routes";

export function loginAttempt(email, password) {
  return (dispatch) => {
    dispatch(getConnected());

    const params = formatRequestParameters("POST", { email, password });

    return fetch(LOGIN_ROUTE, params)
      .then((response) => {
        if (!response.ok) {
          throw new Error("NOT FOUND");
        }

        return response.json();
      })
      .then((data) => {
        const token = data.token;
        dispatch(getConnectedSuccess(token));

        return 1;
      })

      .catch((error) => {
        dispatch(getConnectedError(error));

        return 0;
      });
  };
}
