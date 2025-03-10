import { configureStore } from '@reduxjs/toolkit';
import { appReducer, toggleMenu, closeMenu } from './Slices/appSlice';
import { videoReducer, fetchVideoStart, fetchVideoSuccess, fetchVideosFailure, fetchVideoDetails, searchInput, searchVideoDetails } from './Slices/videoSlice';
import { addLiveChatMessage, chatReducer } from './Slices/chatSlice';

const store = configureStore({
    reducer: {
        app: appReducer,
        videos: videoReducer,
        chats: chatReducer
    }
});

export { store, toggleMenu, closeMenu, fetchVideoStart, fetchVideoSuccess, fetchVideosFailure, fetchVideoDetails, searchInput, searchVideoDetails, addLiveChatMessage };