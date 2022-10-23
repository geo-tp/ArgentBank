import { headers } from "./headers";

export function formatRequestParameters(method, body = null) {
  switch (method) {
    case "GET":
    case "DELETE":
      return { method: method, headers: headers };

    case "PUT":
    case "PATCH":
    case "POST":
      return {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
      };

    default:
      return {};
  }
}

export function formatUrlParameters({
  base_url,
  pk,
  filter_field,
  filter_value,
  filter_fields,
  filter_values,
  search,
  ordering,
  method,
}) {
  let counter = 0;
  let char;

  let url = base_url;

  if (pk) {
    url += pk;
  }

  if (filter_field) {
    url += "?" + filter_field + "=" + filter_value;
    counter += 1;
  } else if (filter_fields) {
    let values = filter_values;
    let fields = filter_fields;

    for (let i = 0; i < values.length; i++) {
      if (i == 0) {
        url += "?";
      }

      url += fields[i] + "=" + values[i];
      counter += 1;

      if (i + 1 != values.length) {
        url += "&";
      }
    }
  }

  if (search) {
    if (counter) {
      char = "&";
    } else {
      char = "?";
    }

    url += char + "search=" + search;
  }

  if (ordering) {
    if (counter) {
      char = "&";
    } else {
      char = "?";
    }
    url += char + "ordering=" + ordering;
  }

  if (method == "PUT") {
    url += "?_method=PUT";
  }

  return url;
}
