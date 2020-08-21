import { createStore, applyMiddleware } from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk'



// const makeStore = (context) => createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
const makeStore = (context) => createStore(rootReducer);

const store = createWrapper(makeStore, {debug: true});

export const wrapper = store;



