import { getTokens } from "./getTokens";

function addIdPrefix(string: string) {
  return string + "@c.us";
}

async function request(
  method: string,
  requestMethod = "GET",
  data?: string
) {
  const { idInstance, apiTokenInstance } = getTokens();
  const url = `https://api.green-api.com/waInstance${idInstance}/${method}/${apiTokenInstance}`;

  const request = await fetch(url, {
    method: requestMethod,
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: data || null,
  });
  return request;
}

export function sendMessage(sendData: { tel: string; message: string }) {
  const data = JSON.stringify({
    chatId: addIdPrefix(sendData.tel),
    message: sendData.message,
  });
  return request("SendMessage", "POST", data);
}

export function getChatHistory(chatId: string) {
  return request(
    "GetChatHistory",
    "POST",
    JSON.stringify({ chatId: addIdPrefix(chatId), count: 500 })
  );
}

export function receiveNotification() {
  return request("ReceiveNotification");
}
