import * as siteActions from "./actionTypes";

export const addToCart = (userId, product) => {
  return {
    type: siteActions.ADD_TO_CART,
    payload: { userId, product },
  };
};

export const removeFromCart = (userId, product) => {
  return {
    type: siteActions.REMOVE_FROM_CART,
    payload: { userId, product },
  };
};

export const loadLocalCart = (userId, localCart) => {
  return {
    type: siteActions.LOAD_LOCAL_CART,
    payload: { userId, localCart },
  };
};

export const login = (email, password) => {
  return {
    type: siteActions.EXISTING_LOGIN,
    payload: { email, password },
  };
};

export const signUp = (name, phoneNo, email, password) => {
  return {
    type: siteActions.SIGNUP,
    payload: { name, phoneNo, email, password },
  };
};

export const logout = (userId) => {
  return {
    type: siteActions.LOGOUT,
    payload: { userId },
  };
};

export const setQueryString = (query) => {
  return {
    type: siteActions.SET_QUERY_STRING,
    payload: query,
  };
};

export const resetQueryString = () => {
  return {
    type: siteActions.SET_QUERY_STRING,
    payload: "",
  };
};
