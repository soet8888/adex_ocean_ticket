import React, { useState, useContext, createContext } from "react";
import { useLocation, Navigate, } from "react-router-dom";
import { store } from "../store/configure_store";
import { actionCreators as userActions } from "../store/actions/user_actions";

const AuthContext = createContext(null);
let accessToken = "";

export const getAccessToken = () => accessToken;
export const setAccessToken = (token) => {
  accessToken = token;
};

export const AuthProvider = ({ user: usr, children }) => {
  const [user, setUser] = useState(usr);
  const logout = async () => {
    if (user) {
      setUser(null);
      store.dispatch(userActions.setUser(null));
    }
  };
  const updateUser = (user) => {
    if (user) {
      setUser(user);
      store.dispatch(userActions.setUser(user));
    }
  };
  const value = { user, accessToken, logout, updateUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const RequireAuth = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user || !auth.user.contact_number) {
    const state = { ...location.state, from: location.pathname };
    // console.log(state);
    return <Navigate to={'/login'} state={state} />;
  }

  return children;
};
