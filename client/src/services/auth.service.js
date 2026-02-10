import { API_URL } from "../lib/api";

export async function login(data) {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const text = await res.text();

  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error("Server did not return JSON");
  }

  if (!res.ok) {
    throw new Error(json.message || "Login failed");
  }

  return json;
}
