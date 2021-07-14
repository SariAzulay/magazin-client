
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {sendEmail} from './middlewear/middelwear';
import post from './reducers/post.reducer'

const reducer= combineReducers({post});

const store= createStore(reducer, (applyMiddleware(sendEmail)));

window.store= store;
export default store;
