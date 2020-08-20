import {SET_USER} from '../actions/userActions';



const userReducer = (state = {currentUser : ""}, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state, currentUser: action.payload};
        default:
            return {...state};
    }
};

export default userReducer;