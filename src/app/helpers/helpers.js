import { environment } from "../../environments/environment";

export function getBaseUrl() {
  const baseURL = environment.dev
    ? "http://localhost:3000"
    : "https://morning-sierra-84400.herokuapp.com";

  return baseURL;
}
