import * as ActionTypes from '../ActionTypes';

export const Metrics = (state = {
    isLoading: true,
    errMess: null,
    performanceMetrics: null,
    dashboardMetrics: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PERFORMANCE_METRICS:
            return { ...state, isLoading: false, errMess: null, performanceMetrics: action.payload }

        case ActionTypes.PERFORMANCE_METRICS_LOADING:
            return { ...state, isLoading: true, errMess: null, performanceMetrics: null }

        case ActionTypes.PERFORMANCE_METRICS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload }

        case ActionTypes.ADD_DASHBOARD_METRICS:
            return { ...state, isLoading: false, errMess: null, dashboardMetrics: action.payload }

        case ActionTypes.DASHBOARD_METRICS_LOADING:
            return { ...state, isLoading: true, errMess: null, dashboardMetrics: null }

        case ActionTypes.DASHBOARD_METRICS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload }

        default:
            return state;
    }
};