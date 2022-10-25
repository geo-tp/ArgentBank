import { getHeaders } from "./headers";

export function formatRequestParameters(method, body = null) {
  const headers = getHeaders();
  switch (method) {
    case "GET":
    case "DELETE":
      return { method, headers };

    case "PUT":
    case "PATCH":
    case "POST":
      return {
        method,
        headers,
        body: JSON.stringify(body),
      };

    default:
      return {};
  }
}
