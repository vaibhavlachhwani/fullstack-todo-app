import { useEffect, useState } from "react";
import { retrieveAllTodosForUser } from "../services/api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import TodoItemCard from "./TodoItemCard";
import { useNavigate } from "react-router-dom";

export default function TodoContainer() {
  const authContext = useAuth();
  const username = authContext.username;

  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => loadTodos, []);

  function loadTodos() {
    retrieveAllTodosForUser(username)
      .then((response) => {
        setTodos(response.data);
        console.log("api called");
      })
      .catch((error) => console.log(error));
  }

  function handleAdd() {
    navigate(`/add-todo`);
  }

  return (
    <>
      <div
        className="h-screen flex justify-center bg-[url(/src/assets/bg-login.webp)]
      bg-cover"
      >
        <div
          className="mb-10 mt-15 mx-10 py-5 px-10 rounded-xl shadow-2xl h-auto w-full max-w-[800px]
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
              <TodoItemCard todo={todo} loadTodos={loadTodos} key={todo.id} />
            ))}
          </div>

          <div className="flex justify-center">
            <button
              className="my-5 py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-all duration-150 ease-in-out cursor-pointer"
              onClick={handleAdd}
            >
              Add New Todo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
