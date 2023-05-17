import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isLogged = false;
    },
    logIn: (state) => {
      state.isLogged = true;
    },
  },
});

const { actions, reducer } = authSlice;

export default reducer;
export const { logOut, logIn } = actions;
