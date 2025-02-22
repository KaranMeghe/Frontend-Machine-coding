import { configureStore } from '@reduxjs/toolkit';
import { appReducer, toggleMenu } from './Slices/appSlice';
import { videoReducer, fetchVideoStart, fetchVideoSuccess, fetchVideosFailure } from './Slices/videoSlice';

const store = configureStore({
    reducer: {
        app: appReducer,
        videos: videoReducer
    }
});

export { store, toggleMenu, fetchVideoStart, fetchVideoSuccess, fetchVideosFailure };