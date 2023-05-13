import { AcceptBtn, Form, Input, Wrapper } from "./style";
import { useState } from "react";

export function Auth() {
  const [idInstance, setidInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");

  function submit() {
    localStorage.setItem("IdInstance", idInstance);
    localStorage.setItem("ApiTokenInstance", apiTokenInstance);
    setidInstance("");
    setApiTokenInstance("");
  }

  return (
    <Wrapper
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
      }}
    >
      <Form>
        <h1 style={{ color: "black", margin: 0 }}>Данные для входа</h1>
        <Input
          onChange={(e) => setidInstance(e.currentTarget.value)}
          value={idInstance}
        />
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
