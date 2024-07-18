import * as ActionTypes from '../ActionTypes';

export const Zones = (state = {
    isLoading: true,
    errMess: null,
    zones: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_ZONES:
            return {...state, isLoading: false, errMess: null, zones: action.payload}

        case ActionTypes.ZONES_LOADING:
            return {...state, isLoading: true, errMess: null, zones: []}

        case ActionTypes.ZONES_FAILED:
            return {...state, isLoading: false, errMess: action.payload}

        default:
            return state;
    }
};