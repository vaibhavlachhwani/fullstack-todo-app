import { apiClient } from "./ApiClient";

export function retrieveAllTodosForUser(username) {
  return apiClient.get(`api/users/${username}/todos`);
}

export function retrieveTodoById(username, id, token) {
  return apiClient.get(`api/users/${username}/todos/${id}`);
}

export function deleteTodoById(username, id, token) {
  return apiClient.delete(`api/users/${username}/todos/${id}`);
}

export function updateTodo(username, id, todo, token) {
  return apiClient.put(`api/users/${username}/todos/${id}`, todo);
}

export function addTodo(username, todo, token) {
  return apiClient.post(`api/users/${username}/todos`, todo);
}
