import { useDispatch } from "react-redux";
import { ChatList } from "../ChatList/ChatsList";
import { ChatInput } from "./ChatInput/ChatInput";
import { Messages } from "./Messages/Messages";
import { ExitBtn, Right, Wrapper } from "./style";
import { logOut } from "../../store/reducers/authSlice";

export function Messenger() {
  const dispatch = useDispatch();

  function exit() {
    localStorage.removeItem("IdInstance");
    localStorage.removeItem("ApiTokenInstance");
    dispatch(logOut());
  }

  return (
    <Wrapper>
      <ChatList />
      <Right>
        <Messages />
        <ChatInput />
      </Right>
      <ExitBtn onClick={exit}>exit</ExitBtn>
    </Wrapper>
  );
}
