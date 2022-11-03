import { getHeaders } from "./headers";
/**
 *
 * @param {string} method - HTTP verb
 * @param {object} body - containing informations for POST/PATCH/PUT requests
 * @returns {object} - Json formatted parameters
 */
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
