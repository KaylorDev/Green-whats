import { useSelector } from "react-redux";
import { OurMessage, TheyMessage, Wrapper } from "./style";

export function Messages() {
  const messages = useSelector((state: any) => state.chat.messages);

  return (
    <Wrapper>
      {messages &&
        messages.map((el: any) =>
          el.type === "outgoing" ? (
            <OurMessage key={el.id}>{el.message}</OurMessage>
          ) : (
            <TheyMessage key={el.id}>{el.message}</TheyMessage>
          )
        )}
    </Wrapper>
  );
}
