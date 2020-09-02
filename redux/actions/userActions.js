import { CHANGE_USER } from "./constants";

export const SET_DEGREE = "SET_DEGREE";
export const SET_STATES = "SET_STATES";
export const SET_BUDGET = "SET_BUDGET";
export const SET_COLLEGE_SIZE_MIN = "SET_COLLEGE_SIZE_MIN";
export const SET_COLLEGE_SIZE_MAX = "SET_COLLEGE_SIZE_MAX";

//Action Creators
export const setDegree = () => ({
   type: SET_DEGREE
});

export const setStates = () => ({
   type: SET_STATES
});

export const setBudget = () => ({
   type: SET_BUDGET
});

export const setCollegeSizeMin = () => ({
   type: SET_COLLEGE_SIZE_MIN
});

export const setCollegeSizeMax = () => ({
   type: SET_COLLEGE_SIZE_MAX
});