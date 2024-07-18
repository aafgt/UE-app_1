import * as ActionTypes from '../ActionTypes';

export const Cows = (state = {
    isLoading: true,
    errMess: null,
    cows: null
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COWS:
            return {...state, isLoading: false, errMess: null, cows: action.payload}

        case ActionTypes.COWS_LOADING:
            return {...state, isLoading: true, errMess: null, cows: null}

        case ActionTypes.COWS_FAILED:
            return {...state, isLoading: false, errMess: action.payload}

        default:
            return state;
    }
};