import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './Slices/appSlice';
import { toggleMenu } from './Slices/appSlice';

const store = configureStore({
    reducer: {
        app: appReducer
    }
});

export { store, toggleMenu };