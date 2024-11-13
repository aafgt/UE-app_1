import * as ActionTypes from '../ActionTypes';

export const Horizon = (state = {
    isLoading: true,
    errMess: null,
    cowsKilledMetrics: null,
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_HORIZON_METRICS:
            return { ...state, isLoading: false, errMess: null, cowsKilledMetrics: action.payload }

        case ActionTypes.HORIZON_METRICS_LOADING:
            return { ...state, isLoading: true, errMess: null, cowsKilledMetrics: null }

        case ActionTypes.HORIZON_METRICS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload }

        default:
            return state;
    }
};