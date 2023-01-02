import { combineReducers } from "redux";
import cart from "./cart";
import users from "./users";
import products from "./products";
import searchQuery from "./searchQuery";

export default combineReducers({ cart, users, products, searchQuery });
