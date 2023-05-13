import { LastMessage, Name, Wrapper } from "./style";

type TChatProps = {
  chat: IChat;
};

export function Chat({ chat }: TChatProps) {
  return (
    <Wrapper>
      <Name>{chat.name}</Name>
      <LastMessage>{chat.lastMessage}</LastMessage>
    </Wrapper>
  );
}
