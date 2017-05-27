import {combineReducers} from 'redux';
import MessageReducer from './reducer-messages';
import SendMessageReducer from './reducer-send-message';

const combinedReducers = combineReducers({
  messages: MessageReducer,
  sentMessages: SendMessageReducer
});

export default combinedReducers;
