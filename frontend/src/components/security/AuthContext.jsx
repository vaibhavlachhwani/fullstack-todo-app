import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  // const [number, setNumber] = useState(1313);

  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);

  // setInterval(() => console.log(isAuthenticated), 5000);

  function login(username, password) {
    if (!(username === "alice" && password === "123")) {
      setAuthenticated(false);
      return false;
    } else {
      setAuthenticated(true);
      setUsername(username);
      return true;
    }
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
        username,
        setUsername,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
