import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Machines } from './reducers/machinesReducer';
import { Products } from './reducers/productsReducer';
import { IsSidebarToggled } from './reducers/sidebarReducer';
import { Data } from './reducers/dataReducer';

const store = configureStore({
    reducer: combineReducers({
        machines: Machines,
        products: Products,
        isSidebarToggled: IsSidebarToggled,
        data: Data
    }),
});

export default store;