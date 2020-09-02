import {SET_BUDGET, SET_DEGREE, SET_STATES, SET_COLLEGE_SIZE_MAX, SET_COLLEGE_SIZE_MIN} from '../actions/userActions';

const initialState = {
    userInfo: {
        degree: "",
        states: [],
        budget: 0,
        collegeSizeMin: 0,
        collegeSizeMax: 0
    }
}

const userReducer = (state = {initialState}, action) => {
    switch (action.type) {
        case SET_DEGREE:
            return {...state, degree: action.payload};
        case SET_BUDGET:
            return {...state, budget: action.payload};
        case SET_STATES:
            return {...state, states: action.payload};
        case SET_COLLEGE_SIZE_MIN:
            return {...state, collegeSizeMin: action.payload};
        case SET_COLLEGE_SIZE_MAX:
            return {...state, collegeSizeMax: action.payload};
        
        default:
            return {...state};
    }
};

export default userReducer;