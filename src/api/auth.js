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
          throw "La connexion a échouée";
        }

        return response.json();
      })
      .then((data) => {
        console.log("DATA", data);
        const token = data.body.token;
        dispatch(getConnectedSuccess(token));

        return 1;
      })

      .catch((error) => {
        console.log(error);

        dispatch(getConnectedError(error));

        return 0;
      });
  };
}
