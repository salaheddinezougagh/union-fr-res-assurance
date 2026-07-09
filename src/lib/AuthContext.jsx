import { createContext, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const value = {
    isLoadingAuth: false,
    isLoadingPublicSettings: false,
    authError: null,
    navigateToLogin: () => {}
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}