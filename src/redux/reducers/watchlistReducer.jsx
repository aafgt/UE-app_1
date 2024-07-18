import * as ActionTypes from '../ActionTypes';

export const Watchlist = (state = {
    isLoading: true,
    errMess: null,
    watchlist: null
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_WATCHLIST:
            return {...state, isLoading: false, errMess: null, watchlist: action.payload}

        case ActionTypes.WATCHLIST_LOADING:
            return {...state, isLoading: true, errMess: null, watchlist: null}

        case ActionTypes.WATCHLIST_FAILED:
            return {...state, isLoading: false, errMess: action.payload}

        default:
            return state;
    }
};