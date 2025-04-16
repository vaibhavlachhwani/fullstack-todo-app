import { useEffect, useState } from "react";
import { retrieveAllTodosForUser } from "../services/api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import TodoItemCard from "./TodoItemCard";

export default function TodoContainer() {
  const authContext = useAuth();
  const username = authContext.username;

  const [todos, setTodos] = useState([]);

  useEffect(() => loadTodos, []);

  function loadTodos() {
    retrieveAllTodosForUser(username)
      .then((response) => {
        setTodos(response.data);
        console.log("api called");
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div
        className="h-screen flex justify-center bg-[url(/src/assets/bg-login.webp)]
      bg-cover"
      >
        <div
          className="my-10 mx-10 py-5 px-10 rounded-xl shadow-2xl h-auto w-full max-w-[800px]
       min-w-[500px] bg-white/25 backdrop-blur-xs"
        >
          <h1 className="text-4xl text-center font-bold mb-5 text-white">
            Manage your Todo Items
          </h1>

          <div
            className="max-h-5/6 overflow-y-auto 
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] 
          [scrollbar-width:'none']"
          >
            {todos.map((todo) => (
              <TodoItemCard todo={todo} key={todo.id} />
            ))}
          </div>

          <div className="flex justify-center">
            <button
              className="my-5 py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 
        text-white transition-all duration-150 ease-in-out cursor-pointer"
            >
              Add New Todo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
