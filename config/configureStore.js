// import { createStore, applyMiddleware } from "redux";
// import rootReducer from '../redux/reducers/rootReducer';
// import logger from 'redux-logger'
// import ReduxThunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension'

// const initialState = {
//     counter:0
// }

// export default function configureStore(preloadedState = initialState) {
  
//   const middlewares = [logger, ReduxThunk]
//   const middlewareEnhancer = applyMiddleware(...middlewares)

//   const enhancers = [middlewareEnhancer]
//   const composedEnhancers = composeWithDevTools(...enhancers)

//   if (preloadedState == null) {
//     return createStore(rootReducer, initialState, composedEnhancers)
//   }
//   const store = createStore(rootReducer, preloadedState, composedEnhancers)
//   return store;
// }