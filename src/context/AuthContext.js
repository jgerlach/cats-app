import React from 'react';

const AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  const user = {};
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return (context = React.useContext(ThemeContext));
}

export { AuthProvider, useAuth };
