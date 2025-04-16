import axios from "axios";
import { retrieveAllTodosForUser } from "../services/api/TodoApiService";

export default function Page() {
  function callApi() {
    retrieveAllTodosForUser("alice")
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }

  function handleButtonClick() {
    callApi();
  }

  return (
    <>
      <div
        className="h-screen bg-[url(src/assets/bg-login.webp)] 
            flex justify-center items-center"
      >
        <button
          className="px-4 py-2 rounded-full bg-white text-black hover:bg-slate-900
         hover:text-white hover:cursor-pointer transition-all duration-300 ease-in-out"
          onClick={handleButtonClick}
        >
          Axios API Consumer
        </button>
      </div>
    </>
  );
}
