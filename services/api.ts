type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
const BASE_URL = "https://api.citizens.asicsoft.ru";

interface FetchOptions {
  method: HttpMethod;
  body?: object;
  headers?: Record<string, string>;
}

const customFetch = async <T>(
  url: string,
  { method, body, headers = {} }: FetchOptions
): Promise<T> => {
  const isFormData = body instanceof FormData;

  const config: RequestInit = {
    method,
    headers: {
      ...headers,
    },
  };

  if (body) {
    if (isFormData) {
      config.body = body;
    } else {
      (config.headers as Record<string, string>)["Content-Type"] =
        "application/json";
      (config.headers as Record<string, string>)["Accept"] = "application/json";
      config.body = JSON.stringify(body);
    }
  }

  (config.headers as Record<string, string>)["Accept-Language"] = "bg";

  const response = await fetch(`${BASE_URL}${url}`, config);

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Server responded with error:", errorText);
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const responseText = await response.text();
  try {
    return JSON.parse(responseText) as T;
  } catch (e) {
    return responseText as unknown as T;
  }
};

export const get = async <Res>(
  url: string,
  headers?: Record<string, string>
): Promise<Res> => {
  return customFetch<Res>(url, { method: "GET", headers });
};

export const post = async <Res, Req extends object>(
  url: string,
  body: Req,
  headers?: Record<string, string>
): Promise<Res> => {
  return customFetch<Res>(url, { method: "POST", body, headers });
};

export const put = async <Res, Req extends object>(
  url: string,
  body: Req,
  headers?: Record<string, string>
): Promise<Res> => {
  return customFetch<Res>(url, { method: "PUT", body, headers });
};
export const patch = async <Res, Req extends object>(
  url: string,
  body: Req,
  headers?: Record<string, string>
): Promise<Res> => {
  return customFetch<Res>(url, { method: "PATCH", body, headers });
};
export const del = async <Res>(
  url: string,
  headers?: Record<string, string>
): Promise<Res> => {
  return customFetch<Res>(url, { method: "DELETE", headers });
};
