import store from "../../store/index";

export const getHeaders = () => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const auth = store.getState().auth;
  if (auth.token) {
    headers["Authorization"] = "Bearer " + auth.token;
  }

  return headers;
};
