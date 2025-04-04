import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./security/AuthContext";

export default function LoginCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAuthError, setShowAuthError] = useState(false);
  const navigate = useNavigate();

  const authContext = useAuth();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    if (!authContext.login(username, password)) {
      setShowAuthError(true);
    } else {
      navigate(`/welcome`);
    }
  }

  return (
    <div
      className="min-w-2/3 min-h-1/2 bg-slate-100 rounded-xl shadow-xl 
          shadow-gray-900 ring ring-gray-300 p-10 sm:p-8 lg:p-12"
    >
      <form className="space-y-6" method="post">
        <h3 className="text-3xl text-center font-medium text-gray-900">
          Login
        </h3>
        <div>
          <label
            className="text-lg font-medium text-gray-900 block mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="bg-gray-50 border border-gray-300 
                  text-gray-900 text-md md:text-lg rounded-lg 
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            name="username"
            id="username"
            placeholder="username"
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label
            className="text-lg font-medium text-gray-900 block mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-gray-50 border border-gray-300 
                  text-gray-900 text-md md:text-lg rounded-lg 
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <p
          className={`text-center text-red-500 ${
            showAuthError ? "block" : "hidden"
          }`}
        >
          Credentials do not match!
        </p>
        <button
          type="button"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 
                focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm 
                px-5 py-2.5 text-center"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}
