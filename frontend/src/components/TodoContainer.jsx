import TodoItemCard from "./TodoItemCard";

export default function TodoContainer() {
  const todos = [
    {
      id: 10,
      description: "Create Todo Card",
      isDone: false,
      dueDate: new Date("December 17, 1995"),
    },
    {
      id: 20,
      description: "Create Todo Container",
      isDone: true,
      dueDate: new Date("December 17, 1995"),
    },
    {
      id: 30,
      description: "Create Todo Page",
      isDone: false,
      dueDate: new Date("December 17, 1995"),
    },
    {
      id: 40,
      description: "Create Todo Page",
      isDone: false,
      dueDate: new Date("December 17, 1995"),
    },
    {
      id: 50,
      description: "Create Todo Page",
      isDone: false,
      dueDate: new Date("December 17, 1995"),
    },
    {
      id: 60,
      description: "Create Todo Page",
      isDone: false,
      dueDate: new Date("December 17, 1995"),
    },
    {
      id: 70,
      description: "Create Todo Page",
      isDone: false,
      dueDate: new Date("December 17, 1995"),
    },
  ];

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
