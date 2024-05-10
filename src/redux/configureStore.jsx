import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Machines } from './reducers/machinesReducer';
import { Products } from './reducers/productsReducer';
import { IsSidebarToggled } from './reducers/sidebarReducer';

const store = configureStore({
    reducer: combineReducers({
        machines: Machines,
        products: Products,
        isSidebarToggled: IsSidebarToggled
    }),
});

export default store;