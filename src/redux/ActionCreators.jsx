import * as cheerio from 'cheerio';
import * as ActionTypes from "./ActionTypes";
import axios from 'axios';

// import https from "https";

// ********************************** SIDEBAR **********************************

export const sidebarToggle = () => ({
    type: ActionTypes.TOGGLE_SIDEBAR
});

export const toggleSidebar = () => (dispatch) => {
    dispatch(sidebarToggle());
}

export const sidebarActiveTabs = (tabs) => ({
    type: ActionTypes.SIDEBAR_TABS_ACTIVE,
    payload: tabs
});

export const ActiveSidebarTabs = (tabsActive) => (dispatch) => {
    dispatch(sidebarActiveTabs(tabsActive));
}

// ********************************** SIDEBAR **********************************


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
        .then(data => { console.log("d", data); dispatch(addData(data)) })
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
        .then(data => { dispatch(addData(data)) })
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



// ********************************** ZONES **********************************

export const zonesLoading = () => ({
    type: ActionTypes.ZONES_LOADING
});

export const zonesFailed = (errMess) => ({
    type: ActionTypes.ZONES_FAILED,
    payload: errMess
});

export const addZones = (zones) => ({
    type: ActionTypes.ADD_ZONES,
    payload: zones
});

export const fetchZones = (zone) => async (dispatch) => {
    dispatch(zonesLoading());

    try {
        const response = await fetch(import.meta.env.VITE_API_URL+`/Cows/GetBarns?pageNumber=${zone}`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        return dispatch(addZones(data));
    }
    catch (error) {
        return dispatch(zonesFailed(error.message));
    }
};

// ********************************** ZONES **********************************



// ********************************** BARN **********************************

export const barnLoading = () => ({
    type: ActionTypes.BARN_LOADING
});

export const barnFailed = (errMess) => ({
    type: ActionTypes.BARN_FAILED,
    payload: errMess
});

export const addBarn = (barn) => ({
    type: ActionTypes.ADD_BARN,
    payload: barn
});

export const fetchBarn = (barnID) => async (dispatch) => {
    dispatch(barnLoading());

    try {
        const response = await fetch(import.meta.env.VITE_API_URL+`/Cows/BarnCows?barnId=${barnID}`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        return dispatch(addBarn(data));
    }
    catch (error) {
        return dispatch(barnFailed(error.message));
    }
};

// ********************************** BARN **********************************



// ********************************** COW **********************************

export const cowLoading = () => ({
    type: ActionTypes.COW_LOADING
});

export const cowFailed = (errMess) => ({
    type: ActionTypes.COW_FAILED,
    payload: errMess
});

export const addCow = (cow) => ({
    type: ActionTypes.ADD_COW,
    payload: cow
});

export const fetchCow = (cowID) => async (dispatch) => {
    dispatch(cowLoading());

    try {
        const response = await fetch(import.meta.env.VITE_API_URL+`/Cows/GetCow?cowId=${cowID}`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        return dispatch(addCow(data));
    }
    catch (error) {
        return dispatch(cowFailed(error.message));
    }
};

// ********************************** COW **********************************



// ********************************** WATCHLIST **********************************

export const watchlistLoading = () => ({
    type: ActionTypes.WATCHLIST_LOADING
});

export const watchlistFailed = (errMess) => ({
    type: ActionTypes.WATCHLIST_FAILED,
    payload: errMess
});

export const addWatchlist = (watchlist) => ({
    type: ActionTypes.ADD_WATCHLIST,
    payload: watchlist
});

export const fetchWatchlist = () => async (dispatch) => {
    dispatch(watchlistLoading());

    try {
        const response = await fetch(import.meta.env.VITE_API_URL+"/Cows/GetSummary");

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();

        return dispatch(addWatchlist(data));
    }
    catch (error) {
        return dispatch(watchlistFailed(error.message));
    }
};

// ********************************** WATCHLIST **********************************



// ********************************** ORDERS **********************************

export const ordersLoading = () => ({
    type: ActionTypes.ORDERS_LOADING
});

export const ordersFailed = (errMess) => ({
    type: ActionTypes.ORDERS_FAILED,
    payload: errMess
});

export const addOrders = (orders) => ({
    type: ActionTypes.ADD_ORDERS,
    payload: orders
});

export const fetchOrders = (feedType) => async (dispatch) => {
    dispatch(ordersLoading());

    try {
        const response = await fetch(import.meta.env.VITE_API_URL+`/Orders/GetOrders?feedTypeName=${feedType}`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        return dispatch(addOrders(data));
    }
    catch (error) {
        return dispatch(ordersFailed(error.message));
    }
};

// ********************************** ORDERS **********************************



// ********************************** FEEDS **********************************

export const feedsLoading = () => ({
    type: ActionTypes.FEEDS_LOADING
});

export const feedsFailed = (errMess) => ({
    type: ActionTypes.FEEDS_FAILED,
    payload: errMess
});

export const addFeeds = (feeds) => ({
    type: ActionTypes.ADD_FEEDS,
    payload: feeds
});

export const fetchFeeds = () => async (dispatch) => {
    dispatch(feedsLoading());

    try {
        const response = await fetch(import.meta.env.VITE_API_URL+"/Feeds/AllFeeds");

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        return dispatch(addFeeds(data));
    }
    catch (error) {
        return dispatch(feedsFailed(error.message));
    }
};

// ********************************** FEEDS **********************************



// ********************************** FEED INFO BY TYPE **********************************

export const feedInfoByTypeLoading = () => ({
    type: ActionTypes.FEED_INFO_BY_TYPE_LOADING
});

export const feedInfoByTypeFailed = (errMess) => ({
    type: ActionTypes.FEED_INFO_BY_TYPE_FAILED,
    payload: errMess
});

export const addFeedInfoByType = (info) => ({
    type: ActionTypes.ADD_FEED_INFO_BY_TYPE,
    payload: info
});

export const fetchFeedInfoByType = (feedType) => async (dispatch) => {
    dispatch(feedInfoByTypeLoading());

    try {
        const response = await fetch(import.meta.env.VITE_API_URL+`/Feeds/StoreFeedInfoByType?feed_Type=${feedType}`);

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        return dispatch(addFeedInfoByType(data));
    }
    catch (error) {
        return dispatch(feedInfoByTypeFailed(error.message));
    }
};

// ********************************** FEED INFO BY TYPE **********************************



// ********************************** TOTAL STORE FEED INFO **********************************

export const totalStoreFeedInfoLoading = () => ({
    type: ActionTypes.TOTAL_STORE_FEED_INFO_LOADING
});

export const totalStoreFeedInfoFailed = (errMess) => ({
    type: ActionTypes.TOTAL_STORE_FEED_INFO_FAILED,
    payload: errMess
});

export const addTotalStoreFeedInfo = (totalFeedInfo) => ({
    type: ActionTypes.ADD_TOTAL_STORE_FEED_INFO,
    payload: totalFeedInfo
});

export const fetchTotalStoreFeedInfo = () => async (dispatch) => {
    dispatch(totalStoreFeedInfoLoading());

    try {
        const response = await fetch(import.meta.env.VITE_API_URL+"/Feeds/TotalStoreFeedInfo");

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        return dispatch(addTotalStoreFeedInfo(data));
    }
    catch (error) {
        return dispatch(totalStoreFeedInfoFailed(error.message));
    }
};

// ********************************** TOTAL STORE FEED INFO **********************************



// ********************************** COMMODITIES DATA **********************************

export const commoditiesLoading = () => ({
    type: ActionTypes.COMMODITIES_LOADING
});

export const commoditiesFailed = (errMess) => ({
    type: ActionTypes.COMMODITIES_FAILED,
    payload: errMess
});

export const addCommodities = (data) => ({
    type: ActionTypes.ADD_COMMODITIES,
    payload: data
});

export const fetchCommodities = () => async (dispatch) => {
    dispatch(commoditiesLoading());

    try {
        const response = await fetch(import.meta.env.VITE_API_URL+"/Cows/getFeedSavings");

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();

        return dispatch(addCommodities(data));
    }
    catch (error) {
        return dispatch(commoditiesFailed(error.message));
    }
};

// ********************************** COMMODITIES DATA **********************************



// ********************************** COWS **********************************

export const cowsLoading = () => ({
    type: ActionTypes.COWS_LOADING
});

export const cowsFailed = (errMess) => ({
    type: ActionTypes.COWS_FAILED,
    payload: errMess
});

export const addCows = (cows) => ({
    type: ActionTypes.ADD_COWS,
    payload: cows
});

export const fetchCows = () => async (dispatch) => {
    dispatch(cowsLoading());

    try {
        const response = await fetch(import.meta.env.VITE_API_URL+"/Cows/countofCow");

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();

        return dispatch(addCows(data));
    }
    catch (error) {
        return dispatch(cowsFailed(error.message));
    }
};

// ********************************** COWS **********************************



// ********************************** PERFORMANCE METRICS **********************************

export const performanceMetricsLoading = () => ({
    type: ActionTypes.PERFORMANCE_METRICS_LOADING
});

export const performanceMetricsFailed = (errMess) => ({
    type: ActionTypes.PERFORMANCE_METRICS_FAILED,
    payload: errMess
});

export const addPerformanceMetrics = (metrics) => ({
    type: ActionTypes.ADD_PERFORMANCE_METRICS,
    payload: metrics
});

export const fetchPerformanceMetrics = () => async (dispatch) => {
    dispatch(performanceMetricsLoading());

    try {
        const response = await fetch(import.meta.env.VITE_API_URL+"/Cows/GetPerformanceMetrics");

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();

        return dispatch(addPerformanceMetrics(data));
    }
    catch (error) {
        return dispatch(performanceMetricsFailed(error.message));
    }
};

// ********************************** PERFORMANCE METRICS **********************************



// ********************************** DASHBOARD METRICS **********************************

export const dashboardMetricsLoading = () => ({
    type: ActionTypes.DASHBOARD_METRICS_LOADING
});

export const dashboardMetricsFailed = (errMess) => ({
    type: ActionTypes.DASHBOARD_METRICS_FAILED,
    payload: errMess
});

export const addDashboardMetrics = (metrics) => ({
    type: ActionTypes.ADD_DASHBOARD_METRICS,
    payload: metrics
});

export const fetchDashboardMetrics = () => async (dispatch) => {
    dispatch(dashboardMetricsLoading());

    try {
        const response = await fetch(import.meta.env.VITE_API_URL+"/Cows/GetDashboardMetrics");

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();

        return dispatch(addDashboardMetrics(data));
    }
    catch (error) {
        return dispatch(dashboardMetricsFailed(error.message));
    }
};

// ********************************** DASHBOARD METRICS **********************************



// ********************************** SCRAPED DATA **********************************

export const scrapedDataLoading = () => ({
    type: ActionTypes.DASHBOARD_METRICS_LOADING
});

export const scrapedDataFailed = (errMess) => ({
    type: ActionTypes.DASHBOARD_METRICS_FAILED,
    payload: errMess
});

export const addScrapedData = (metrics) => ({
    type: ActionTypes.ADD_DASHBOARD_METRICS,
    payload: metrics
});

export const getScrapedData = () => async (dispatch) => {
    // dispatch(scrapedDataLoading());

    try {
        // Get the page content
        const { data } = await axios.get("https://www.mistcommodities.com/Index.aspx?LId=1");
        const $ = cheerio.load(data);

        // Find the table container
        const tableDiv = $('#div_CommoditiesPrices');

        // Find the table within the container
        const table = tableDiv.find('table.table2');

        // Extract table rows
        const rows = table.find('tr');

        // Extract header
        const header = [];
        rows.first().find('th').each((i, th) => {
            header.push($(th).text().trim());
        });

        // Extract data
        let data2 = [];
        rows.slice(1).each((i, row) => {
            const rowData = [];
            $(row).find('td').each((j, col) => {
                rowData.push($(col).text().trim());
            });
            data2.push(rowData);
        });

        // Print the extracted data
        console.log(header);
        data2.forEach(row => {
            console.log(row);
        });

    } catch (error) {
        // return dispatch(scrapedDataFailed(error.message));
        console.error('Error fetching data:', error);
    }
};

// ********************************** SCRAPED DATA **********************************