type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface FetchOptions {
  method: HttpMethod;
  body?: any;
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
      ...headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(url, config);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const get = async <T>(
  url: string,
  headers?: Record<string, string>
): Promise<T> => {
  return customFetch<T>(url, { method: "GET", headers });
};

export const post = async <T>(
  url: string,
  body: any,
  headers?: Record<string, string>
): Promise<T> => {
  return customFetch<T>(url, { method: "POST", body, headers });
};

export const put = async <T>(
  url: string,
  body: any,
  headers?: Record<string, string>
): Promise<T> => {
  return customFetch<T>(url, { method: "PUT", body, headers });
};

export const del = async <T>(
  url: string,
  headers?: Record<string, string>
): Promise<T> => {
  return customFetch<T>(url, { method: "DELETE", headers });
};
