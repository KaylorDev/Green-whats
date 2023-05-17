import { useState } from "react";
import { AcceptBtn, Form, Input, InputLabel } from "../../LogIn/style";
import { Wrapper } from "./style";

type TCreateChatProps = {
  setChats: (state: IChat[]) => void;
  chats: IChat[];
};

export function CreateChat({ setChats, chats }: TCreateChatProps) {
  const [chat, setChat] = useState<IChat>({ tel: "", name: "" });

  function addChat() {
    if (validate()) {
      setChats([...chats, chat]);
      setChat({ tel: "", name: "" });
    }
  }

  function validate() {
    if (chat.tel && chat.name) return true;
    return false;
  }

  return (
    <Wrapper>
      <Form>
        <InputLabel>Имя</InputLabel>
        <Input
          onChange={(e) =>
            setChat((state) => ({ ...state, name: e.target.value }))
          }
          value={chat.name}
        />
        <InputLabel>Номер</InputLabel>
        <Input
          onChange={(e) =>
            setChat((state) => ({ ...state, tel: e.target.value }))
          }
          value={chat.tel}
          type="number"
        />
        <AcceptBtn type="button" onClick={addChat}>
          Добавить
        </AcceptBtn>
      </Form>
    </Wrapper>
  );
}
