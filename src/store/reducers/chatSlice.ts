import { createSlice } from "@reduxjs/toolkit";

type TState = {
  activeChat: string;
  messages: { id: string; type: string; message: string }[];
};

const initialState: TState = {
  activeChat: "",
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChat: (state, action: { type: string; payload: string }) => {
      state.activeChat = action.payload;
    },
    setMessages: (state, action: { type: string; payload: any }) => {
      state.messages = action.payload.map((el: any) => ({
        id: el.idMessage,
        type: el.type,
        message: el.textMessage,
      }));
    },
  },
});

const { actions, reducer } = chatSlice;

export default reducer;
export const { setChat, setMessages } = actions;
