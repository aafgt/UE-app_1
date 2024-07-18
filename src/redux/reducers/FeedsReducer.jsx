import * as ActionTypes from '../ActionTypes';

export const Feeds = (state = {
    isLoading: true,
    errMess: null,
    feedItems: [],
    feedInfoByType: null,
    totalStoreFeedInfo: null,
    commoditiesData: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDS:
            return { ...state, isLoading: false, errMess: null, feedItems: action.payload }

        case ActionTypes.FEEDS_LOADING:
            return { ...state, isLoading: true, errMess: null, feedItems: [] }

        case ActionTypes.FEEDS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload }

        case ActionTypes.ADD_FEED_INFO_BY_TYPE:
            return { ...state, isLoading: false, errMess: null, feedInfoByType: action.payload }

        case ActionTypes.FEED_INFO_BY_TYPE_LOADING:
            return { ...state, isLoading: true, errMess: null, feedInfoByType: null }

        case ActionTypes.FEED_INFO_BY_TYPE_FAILED:
            return { ...state, isLoading: false, errMess: action.payload }

        case ActionTypes.ADD_TOTAL_STORE_FEED_INFO:
            return { ...state, isLoading: false, errMess: null, totalStoreFeedInfo: action.payload }

        case ActionTypes.TOTAL_STORE_FEED_INFO_LOADING:
            return { ...state, isLoading: true, errMess: null, totalStoreFeedInfo: null }

        case ActionTypes.TOTAL_STORE_FEED_INFO_FAILED:
            return { ...state, isLoading: false, errMess: action.payload }

        case ActionTypes.ADD_COMMODITIES:
            return { ...state, isLoading: false, errMess: null, commoditiesData: action.payload }

        case ActionTypes.COMMODITIES_LOADING:
            return { ...state, isLoading: true, errMess: null, commoditiesData: null }

        case ActionTypes.COMMODITIES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload }

        default:
            return state;
    }
};