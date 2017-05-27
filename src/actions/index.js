export const sendMessage = (message) => {
  console.log(message.text);
  return {
    type: "MESSAGE_SENT",
    payload: message
  }
};
