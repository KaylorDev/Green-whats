import { combineReducers, createStore } from "@reduxjs/toolkit";
import auth from "./reducers/authSlice";
import chat from "./reducers/chatSlice";

const rootReducer = combineReducers({ auth, chat });

const store = createStore(rootReducer);

export default store;
