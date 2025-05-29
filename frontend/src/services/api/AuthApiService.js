import { apiClient } from "./ApiClient";

export function executeBasicAuthService(token) {
  return apiClient.get(`auth/basic-auth`, {
    headers: {
      Authorization: token,
    },
  });
}
