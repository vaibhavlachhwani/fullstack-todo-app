import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api",
});

export function retrieveAllTodosForUser(username) {
  return apiClient.get(`/users/${username}/todos`, {
    headers: {
      Authorization: "Basic YWxpY2U6MTIz",
    },
  });
}

export function retrieveTodoById(username, id) {
  return apiClient.get(`/users/${username}/todos/${id}`, {
    headers: {
      Authorization: "Basic YWxpY2U6MTIz",
    },
  });
}

export function deleteTodoById(username, id) {
  return apiClient.delete(`/users/${username}/todos/${id}`, {
    headers: {
      Authorization: "Basic YWxpY2U6MTIz",
    },
  });
}

export function updateTodo(username, id, todo) {
  return apiClient.put(`/users/${username}/todos/${id}`, todo, {
    headers: {
      Authorization: "Basic YWxpY2U6MTIz",
    },
  });
}

export function addTodo(username, todo) {
  return apiClient.post(`/users/${username}/todos`, todo, {
    headers: {
      Authorization: "Basic YWxpY2U6MTIz",
    },
  });
}
