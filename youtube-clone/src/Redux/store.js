import { configureStore } from '@reduxjs/toolkit';
import { appReducer, toggleMenu, closeMenu } from './Slices/appSlice';
import { videoReducer, fetchVideoStart, fetchVideoSuccess, fetchVideosFailure, fetchVideoDetails, searchInput } from './Slices/videoSlice';

const store = configureStore({
    reducer: {
        app: appReducer,
        videos: videoReducer
    }
});

export { store, toggleMenu, closeMenu, fetchVideoStart, fetchVideoSuccess, fetchVideosFailure, fetchVideoDetails, searchInput };