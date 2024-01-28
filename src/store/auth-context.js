import React, { useState } from "react";

const AuthContext = React.createContext({
  isLogedIn: false,
  onLogout: () => {},
  onLogin: (username, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLogedIn, setlogedIn] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setlogedIn(false);
  };

  const loginHandler = (token) => {
    localStorage.setItem("token", token);
    setlogedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogedIn: isLogedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
