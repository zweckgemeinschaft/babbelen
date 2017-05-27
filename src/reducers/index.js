import {combineReducers} from 'redux';
const initialState = {
  messages: []
};

const reducerFunctions = {
  MESSAGE_SENT: messageSent
}; 

export default function(state=initialState, action) {
  if (reducerFunctions[action.type]) {
    return reducerFunctions[action.type](state, action.payload);
  }
  
  return state;
}

function messageSent(state, payload) {
  return {
    ...state,
    messages: [
      ...state.messages,
      payload
    ]
  }
}
