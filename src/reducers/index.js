import {combineReducers} from 'redux';
import MessageReducer from './reducer-messages';

const combinedReducers = combineReducers({
  messages: MessageReducer,
});

export default combinedReducers;
