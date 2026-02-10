import { apiRequest } from "../lib/api";

export function login(data) {
  return apiRequest("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function register(data) {
  return apiRequest("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
