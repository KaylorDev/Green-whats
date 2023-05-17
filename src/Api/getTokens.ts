export function getTokens() {
  return {
    idInstance: localStorage.getItem("IdInstance"),
    apiTokenInstance: localStorage.getItem("ApiTokenInstance"),
  };
}
