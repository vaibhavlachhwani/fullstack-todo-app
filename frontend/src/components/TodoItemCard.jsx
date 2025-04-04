export default function TodoItemCard({ todo }) {
  // const todo = {
  //   id: 10,
  //   description: "Creater Todo Card",
  //   isDone: false,
  //   dueDate: new Date("December 17, 1995"),
  // };

  return (
    <div className="p-4 bg-slate-200 rounded-lg mb-4 ring ring-gray-300">
      <h3 className="text-xl font-bold text-blue-600 mb-2">
        {todo.description}
      </h3>
      <p className="font-bold text-red-600 mb-1">
        Due date:{" "}
        <span className="font-normal text-black">
          {todo.dueDate.toDateString()}
        </span>
      </p>
      <p className="text-red-600 mb-2">
        {todo.isDone ? "Completed" : "Pending"}
      </p>
      <button
        className="mr-2 py-2 px-4 rounded-md bg-red-600 hover:bg-red-700 
        text-white transition-all duration-300 ease-in-out cursor-pointer"
      >
        Delete
      </button>
      <button
        className="ml-2 py-2 px-4 rounded-md bg-white hover:bg-blue-600 
        hover:text-white transition-all duration-150 ease-in-out cursor-pointer"
      >
        Update
      </button>
    </div>
  );
}
