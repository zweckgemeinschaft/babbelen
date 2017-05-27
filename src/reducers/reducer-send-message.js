export default function(state=[], action) {
  switch(action.type) {
    case "MESSAGE_SENT":
      return [
        ...state,
        action.payload
      ]
      break;
  }
  return state;
}
