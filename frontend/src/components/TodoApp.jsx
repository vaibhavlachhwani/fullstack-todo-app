import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import WelcomeComponent from "./WelcomeComponent";
import TodoContainer from "./TodoContainer";
import ErrorComponent from "./ErrorComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";
import Page from "./Page";
import UpdateTodoComponent from "./UpdateTodoComponent";
import AddTodoComponent from "./AddTodoComponent";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();

  if (authContext.isAuthenticated) {
    return children;
  }

  return <Navigate to={"/"} />;
}

export default function TodoApp() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />}></Route>

            <Route path="/login" element={<LoginComponent />}></Route>

            <Route
              path="/welcome"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                </AuthenticatedRoute>
              }
            ></Route>

            <Route
              path="/list-todos"
              element={
                <AuthenticatedRoute>
                  <TodoContainer />
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            ></Route>

            <Route
              path="/todo/:id"
              element={
                <AuthenticatedRoute>
                  <UpdateTodoComponent />
                </AuthenticatedRoute>
              }
            ></Route>

            <Route
              path="/add-todo"
              element={
                <AuthenticatedRoute>
                  <AddTodoComponent />
                </AuthenticatedRoute>
              }
            ></Route>

            <Route path="*" element={<ErrorComponent />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
