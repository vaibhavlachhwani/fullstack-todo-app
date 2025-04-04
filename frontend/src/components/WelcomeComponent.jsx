import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function WelcomeComponent() {
  const authContext = useAuth();
  const username = authContext.username;
  const navigate = useNavigate();

  function handleClick(event) {
    navigate(`/list-todos`);
  }

  return (
    <div
      className="h-screen flex items-center justify-center 
        bg-[url(/src/assets/bg-login.webp)]"
    >
      <div
        className="min-h-50 min-w-100 bg-slate-100 rounded-sm shadow-xl 
          shadow-gray-900 ring ring-gray-300 px-10 py-6"
      >
        <h2 className="text-3xl font-bold text-center mb-3">
          Welcome, <span className="text-blue-600">{username}</span>!
        </h2>
        <p className="text-gray-600 text-center mb-8">
          We're glad to have you back.
        </p>
        <div className="flex justify-center align-top">
          <button
            className="bg-blue-600 text-white font-bold rounded-md p-3
            hover:bg-blue-800"
            onClick={handleClick}
          >
            View Todo List
          </button>
        </div>
      </div>
    </div>
  );
}
