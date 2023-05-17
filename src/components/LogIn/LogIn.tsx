import { useDispatch } from "react-redux";
import { AcceptBtn, Form, Input, InputLabel, Wrapper } from "./style";
import { useEffect, useState } from "react";
import { logIn } from "../../store/reducers/authSlice";

export function LogIn() {
  const [idInstance, setidInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      localStorage.getItem("IdInstance") &&
      localStorage.getItem("ApiTokenInstance")
    )
      dispatch(logIn());
  }, [dispatch]);

  function submit() {
    localStorage.setItem("IdInstance", idInstance);
    localStorage.setItem("ApiTokenInstance", apiTokenInstance);
    dispatch(logIn());
    setidInstance("");
    setApiTokenInstance("");
  }

  return (
    <Wrapper>
      <Form>
        <h1 style={{ color: "black", margin: 0 }}>Данные для входа</h1>
        <InputLabel>Instance ID</InputLabel>
        <Input
          onChange={(e) => setidInstance(e.currentTarget.value)}
          value={idInstance}
        />
        <InputLabel>Token</InputLabel>
        <Input
          onChange={(e) => setApiTokenInstance(e.currentTarget.value)}
          value={apiTokenInstance}
        />
        <AcceptBtn type="button" onClick={submit}>
          Войти
        </AcceptBtn>
      </Form>
    </Wrapper>
  );
}
