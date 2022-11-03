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
import { fetchJson } from "./utils/fetchers";

export function fetchUserProfile() {
  const params = formatRequestParameters("POST", {});
  return fetchJson(
    getUser,
    getUserSuccess,
    getUserError,
    USER_ROUTE,
    PROFILE_ERROR,
    params
  );
}

export function fetchUserUpdate(firstName, lastName) {
  const params = formatRequestParameters("PUT", { firstName, lastName });
  return fetchJson(
    updateUser,
    updateUserSuccess,
    updateUserError,
    USER_ROUTE,
    PROFILE_UPDATE_ERROR,
    params
  );
}
