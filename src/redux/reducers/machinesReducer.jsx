import * as ActionTypes from '../ActionTypes';

export const Machines = (state = {
    isLoading: true,
    errMess: null,
    machines: [],
    machinesData: null
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_MACHINES:
            return {...state, isLoading: false, errMess: null, machines: action.payload.machines, machinesData: action.payload.machinesData}

        case ActionTypes.MACHINES_LOADING:
            return {...state, isLoading: true, errMess: null, machines: []}

        case ActionTypes.MACHINES_FAILED:
            return {...state, isLoading: false, errMess: action.payload}

        default:
            return state;
    }
};