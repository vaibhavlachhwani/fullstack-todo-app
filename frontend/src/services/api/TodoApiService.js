import { apiClient } from "./ApiClient";

export function retrieveAllTodosForUser(username, token) {
  return apiClient.get(`api/users/${username}/todos`, {
    headers: {
      Authorization: token,
    },
  });
}

export function retrieveTodoById(username, id, token) {
  return apiClient.get(`api/users/${username}/todos/${id}`, {
    headers: {
      Authorization: token,
    },
  });
}

export function deleteTodoById(username, id, token) {
  return apiClient.delete(`api/users/${username}/todos/${id}`, {
    headers: {
      Authorization: token,
    },
  });
}

export function updateTodo(username, id, todo, token) {
  return apiClient.put(`api/users/${username}/todos/${id}`, todo, {
    headers: {
      Authorization: token,
    },
  });
}

export function addTodo(username, todo, token) {
  return apiClient.post(`api/users/${username}/todos`, todo, {
    headers: {
      Authorization: token,
    },
  });
}
