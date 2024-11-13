import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { IsSidebarToggled } from './reducers/sidebarReducer';
import { Data } from './reducers/dataReducer';
import { Zones } from './reducers/zoneReducer';
import { Barn } from './reducers/barnReducer';
import { Watchlist } from './reducers/watchlistReducer';
import { Orders } from './reducers/ordersReducer';
import { Feeds } from './reducers/FeedsReducer';
import { Cows } from './reducers/cowsReducer';
import { Metrics } from './reducers/metricsReducer';
import { Horizon } from './reducers/horizonReducer';

const store = configureStore({
    reducer: combineReducers({
        isSidebarToggled: IsSidebarToggled,
        data: Data,
        zones: Zones,
        barn: Barn,
        watchlist: Watchlist,
        orders: Orders,
        feeds: Feeds,
        cows: Cows,
        metrics: Metrics,
        horizon: Horizon
    }),
});

export default store;