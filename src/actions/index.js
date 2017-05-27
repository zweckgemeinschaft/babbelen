export const sendMessage = (message) => {
  return {
    type: "MESSAGE_SENT",
    payload: {
      ...message,
      own: true
    }
  }
};
