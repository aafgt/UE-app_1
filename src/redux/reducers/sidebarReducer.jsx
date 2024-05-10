import * as ActionTypes from '../ActionTypes';

export const IsSidebarToggled = (state = {
    isSidebarToggled: true,
    sidebarTabsActive: ["", "", "", "", "", "", "", "", "", "", "", ""]
    }, action) => {
    switch(action.type) {
        case ActionTypes.TOGGLE_SIDEBAR:
            return {...state, isSidebarToggled: !state.isSidebarToggled};

        case ActionTypes.SIDEBAR_TABS_ACTIVE:
            return {...state, sidebarTabsActive: action.payload};    

        default:
            return state;
    }
};