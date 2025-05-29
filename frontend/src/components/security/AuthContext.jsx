import { createContext, useContext, useState } from "react";
import { executeBasicAuthService } from "../../services/api/AuthApiService";
import { apiClient } from "../../services/api/ApiClient";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  // const [number, setNumber] = useState(1313);

  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  async function login(username, password) {
    const baToken = "Basic " + window.btoa(username + ":" + password);
    // console.log(baToken);

    try {
      const response = await executeBasicAuthService(baToken);

      if (response.status == 200) {
        setAuthenticated(true);
        setUsername(username);
        setToken(baToken);

        apiClient.interceptors.request.use((config) => {
          console.log(
            "Interceppting apiClient. Adding Auth header: " + baToken
          );
          config.headers.Authorization = baToken;
          return config;
        });

        return true;
      } else {
        logout();

        return false;
      }
    } catch (error) {
      console.log(error);

      logout();

      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
    setUsername(null);
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
        username,
        setUsername,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
