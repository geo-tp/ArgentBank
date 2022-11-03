import {
  getConnected,
  getConnectedError,
  getConnectedSuccess,
} from "../store/actions/auth";
import { LOGIN_ERROR } from "./utils/messages";
import { formatRequestParameters } from "./utils/formatters";
import { LOGIN_ROUTE } from "./utils/routes";
import { fetchJson } from "./utils/fetchers";

export function loginAttempt(email, password) {
  const params = formatRequestParameters("POST", { email, password });

  return fetchJson(
    getConnected,
    getConnectedSuccess,
    getConnectedError,
    LOGIN_ROUTE,
    LOGIN_ERROR,
    params
  );
}
