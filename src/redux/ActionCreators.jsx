import * as ActionTypes from "./ActionTypes";

import logo from "../assets/Business growth-amico.png";

// import https from "https";

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







export const fetchData = () => (dispatch) => {
    dispatch(dataLoading(true));

    return fetch("https://828a-197-36-178-82.ngrok-free.app/plot_1/")
        .then(response => {
            console.log("r", response);
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
        .then(response => response.text())
        .then(data => {console.log("d", data); dispatch(addData(data))})
        .catch(error => dispatch(dataFailed(error.message)));
}

export const dataLoading = () => ({
    type: ActionTypes.DATA_LOADING
});

export const dataFailed = (errMess) => ({
    type: ActionTypes.DATA_FAILED,
    payload: errMess
});

export const addData = (data) => ({
    type: ActionTypes.ADD_DATA,
    payload: data
});





export const testPOSTpic = () => (dispatch) => {

    const data = {
        // "formFile": logo
        "Name": "asdsd"
    }
    const data2 = "ziadd"
    // http://192.168.1.120:7087/api/TEST/Upload
    return fetch("http://192.168.1.120:5107/api/TEST", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data2),
        // redirect: "follow"
        credentials: 'same-origin'
    })
        .then(response => {
            console.log(response)
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
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => alert(error));
}

export const testGETpic = () => (dispatch) => {

    return fetch("http://192.168.1.120:5107/api/TEST")
        .then(response => {
            console.log(response)
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
        .then(data => alert(data))
        .catch(error => alert(error));
}

export const fetchData2 = () => (dispatch) => {
    dispatch(dataLoading(true));

    return fetch("https://192.168.1.120:7087/api/TEST/GetImage/2024.png")
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
        .then(response => response.text())
        .then(data => {dispatch(addData(data))})
        .catch(error => dispatch(dataFailed(error.message)));
}

export const fetchData3 = () => (dispatch) => {
    dispatch(dataLoading(true));

    // const https = require("https");

    // const agent = new https.Agent({
    //     rejectUnauthorized: false
    // });

    return fetch("https://192.168.1.120:7087/UploadedImages/2024.png")
        .then(response => {
            console.log(response)
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
        .then(response => response.blob())
        .then(data => dispatch(addData(URL.createObjectURL(data))))
        .catch(error => dispatch(dataFailed(error.message)));
}