import { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { Chat } from "./Chat/Chat";

export function ChatList() {
  const [chats, setChats] = useState<IChat[]>([]);

  useEffect(() => {
    setChats([]);
  }, []);

  return (
    <Wrapper>
      {chats.length && chats.map((chat) => <Chat chat={chat} />)}
    </Wrapper>
  );
}
