import * as ActionTypes from "./ActionTypes";

export const fetchMachines = () => (dispatch) => {
    dispatch(machinesLoading(true));

    return fetch("http://192.168.1.16:5287/api/Weight/WeightTotal")
        .then(response => {
            if (response.ok)
                return response;
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(machines => dispatch(addMachines(machines)))
        .catch(error => dispatch(machinesFailed(error.message)));
}

export const machinesLoading = () => ({
    type: ActionTypes.MACHINES_LOADING
});

export const machinesFailed = (errMess) => ({
    type: ActionTypes.MACHINES_FAILED,
    payload: errMess
});

export const addMachines = (machines) => ({
    type: ActionTypes.ADD_MACHINES,
    payload: {
        "machines": machines,
        "machinesData": machines.data
    }
});



export const fetchProducts = () => (dispatch) => {
    dispatch(productsLoading(true));

    return fetch("http://192.168.1.16:5287/api/Product")
        .then(response => {
            if (response.ok)
                return response;
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(products => dispatch(addProducts(products)))
        .catch(error => dispatch(productsFailed(error.message)));
}

export const productsLoading = () => ({
    type: ActionTypes.PRODUCTS_LOADING
});

export const productsFailed = (errMess) => ({
    type: ActionTypes.PRODUCTS_FAILED,
    payload: errMess
});

export const addProducts = (products) => ({
    type: ActionTypes.ADD_PRODUCTS,
    payload: products
});



export const toggleSidebar = () => (dispatch) => {
    dispatch(sidebarToggle());
}

export const sidebarToggle = () => ({
    type: ActionTypes.TOGGLE_SIDEBAR
});

export const ActiveSidebarTabs = (tabsActive) => (dispatch) => {
    dispatch(sidebarActiveTabs(tabsActive));
}

export const sidebarActiveTabs = (tabs) => ({
    type: ActionTypes.SIDEBAR_TABS_ACTIVE,
    payload: tabs
});
