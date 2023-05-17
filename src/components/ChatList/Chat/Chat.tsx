import { useDispatch, useSelector } from "react-redux";
import { LastMessage, Name, Wrapper } from "./style";
import { setChat, setMessages } from "../../../store/reducers/chatSlice";
import { getChatHistory } from "../../../Api/api";

type TChatProps = {
  chat: IChat;
};

export function Chat({ chat }: TChatProps) {
  const dispatch = useDispatch();
  const selectedChat = useSelector((state: any) => state.chat.activeChat);
  const isActive = chat.tel === selectedChat;

  function selectChat() {
    dispatch(setChat(chat.tel));
    getChatHistory(chat.tel)
      .then(async (r) => dispatch(setMessages(await r.json())))
      .catch((e: Error) => alert(e.message));
  }

  return (
    <Wrapper active={isActive} onClick={selectChat}>
      <Name>{chat.name}</Name>
      <LastMessage>{chat.tel}</LastMessage>
    </Wrapper>
  );
}
