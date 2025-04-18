import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api",
});

export function retrieveAllTodosForUser(username) {
  return apiClient.get(`/users/${username}/todos`);
}

export function retrieveTodoById(username, id) {
  return apiClient.get(`/users/${username}/todos/${id}`);
}

export function deleteTodoById(username, id) {
  return apiClient.delete(`/users/${username}/todos/${id}`);
}

export function updateTodo(username, id, todo) {
  return apiClient.put(`/users/${username}/todos/${id}`, todo);
}
