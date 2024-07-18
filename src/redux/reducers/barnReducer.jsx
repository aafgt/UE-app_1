import * as ActionTypes from '../ActionTypes';

export const Barn = (state = {
    isLoading: true,
    errMess: null,
    barn: [],
    cow: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BARN:
            return { ...state, isLoading: false, errMess: null, barn: action.payload }

        case ActionTypes.BARN_LOADING:
            return { ...state, isLoading: true, errMess: null, barn: [] }

        case ActionTypes.BARN_FAILED:
            return { ...state, isLoading: false, errMess: action.payload }

        case ActionTypes.ADD_COW:
            return { ...state, isLoading: false, errMess: null, cow: action.payload }

        case ActionTypes.COW_LOADING:
            return { ...state, isLoading: true, errMess: null, cow: null }

        case ActionTypes.COW_FAILED:
            return { ...state, isLoading: false, errMess: action.payload }

        default:
            return state;
    }
};