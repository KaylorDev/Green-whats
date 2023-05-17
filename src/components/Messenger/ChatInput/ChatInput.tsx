import { useState } from "react";
import { TextInput, Wrapper } from "./style";
import { sendMessage } from "../../../Api/api";
import { useSelector } from "react-redux";

export function ChatInput() {
  const [message, setMessage] = useState("");
  const selectedChat = useSelector((state: any) => state.chat.activeChat);

  function send() {
    if (message) {
      sendMessage({ tel: selectedChat, message }).catch((e) => console.log(e));
    }
    setMessage("");
  }

  return (
    <Wrapper>
      <TextInput
        value={message}
        onKeyDown={(e) => {
          if (e.key === "Enter") send();
        }}
        onChange={(e) => setMessage(e.target.value)}
        multiple
      />
      <button onClick={send}>{">"}</button>
    </Wrapper>
  );
}
