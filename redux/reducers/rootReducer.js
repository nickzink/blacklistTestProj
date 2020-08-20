import counterReducer from './counterReducer';
import userReducer from './userReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
});

export default rootReducer;