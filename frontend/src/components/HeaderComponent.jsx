import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function HeaderComponent() {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;

  return (
    <div className="hidden sm:flex sm:justify-center">
      <nav className="p-2 z-2 bg-black w-full">
        <ul>
          <li
            className={`${
              isAuthenticated ? "inline" : "hidden"
            } rounded-full hover:bg-blue-700 text-sm text-white float-left px-4`}
          >
            <Link to="/welcome">Home</Link>
          </li>
          <li
            className={`${
              isAuthenticated ? "inline" : "hidden"
            } rounded-full hover:bg-blue-700 text-sm text-white float-left px-4`}
          >
            <Link to="/list-todos">Todos</Link>
          </li>
          <li
            className={`${
              isAuthenticated ? "hidden" : "inline"
            } rounded-full hover:bg-blue-700 text-sm text-white float-right px-4`}
          >
            <Link to="/login">Login</Link>
          </li>
          <li
            className={`${
              isAuthenticated ? "inline" : "hidden"
            } rounded-full hover:bg-blue-700 text-sm text-white float-right px-4`}
          >
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
