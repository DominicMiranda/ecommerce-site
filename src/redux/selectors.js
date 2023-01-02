export const getProductList = (store) =>
  store && store.products ? store.products : [];

export const getProductListByQuery = (store, searchQuery) => {
  const productList = getProductList(store);
  return productList.filter((product) =>
    product.name.toLowerCase().match(searchQuery.toLowerCase())
  );
};

export const getCartItems = (store, userId) =>
  store && store.cart && store.cart[userId] ? store.cart[userId] : [];

export const getAllUsers = (store) =>
  store && store.users ? store.users.allIds : [];

export const getUserData = (store, userId) =>
  store && store.users && store.users.byIds ? store.users.byIds[userId] : {};
