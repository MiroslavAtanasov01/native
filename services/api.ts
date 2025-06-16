type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
const BASE_URL = "https://api.citizens.asicsoft.ru/api";

interface FetchOptions {
  method: HttpMethod;
  body?: object;
  headers?: Record<string, string>;
}

const customFetch = async <T>(
  url: string,
  { method, body, headers }: FetchOptions
): Promise<T> => {
  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "bg",
      ...headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}${url}`, config);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
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
