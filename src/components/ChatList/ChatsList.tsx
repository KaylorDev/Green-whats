import { useState, useEffect } from "react";
import { Wrapper } from "./style";
import { Chat } from "./Chat/Chat";
import { CreateChat } from "./CreateChat/CreateChat";
import { useDispatch, useSelector } from "react-redux";
import { getChatHistory } from "../../Api/api";
import { setMessages } from "../../store/reducers/chatSlice";

export function ChatList() {
  const [chats, setChats] = useState<IChat[]>([]);
  const selectedChat = useSelector((state: any) => state.chat.activeChat);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedChat) {
      const recieveTimer = setInterval(
        () =>
          getChatHistory(selectedChat)
            .then(async (r) => dispatch(setMessages(await r.json())))
            .catch((e: Error) => alert(e.message)),
        10000
      );
      recieveTimer;
    }
  }, [dispatch, selectedChat]);

  return (
    <Wrapper>
      {chats.length ? (
        chats.map((chat) => <Chat key={chat.tel} chat={chat} />)
      ) : (
        <div style={{ color: "black" }}>Нет чатов</div>
      )}
      <CreateChat chats={chats} setChats={setChats} />
    </Wrapper>
  );
}
