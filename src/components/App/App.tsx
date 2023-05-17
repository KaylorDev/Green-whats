import { useSelector } from "react-redux";
import { LogIn } from "../LogIn/LogIn";
import { Messenger } from "../Messenger/Messenger";
import "./App.css";
import "./normalize.css";

function App() {
  const isLogged = useSelector((state: any) => state.auth.isLogged);

  return <>{isLogged ? <Messenger /> : <LogIn />}</>;
}

export default App;
