import { createSlice } from '@reduxjs/toolkit';

const videosSlice = createSlice({
    name: "video",
    initialState: {
        loading: false,
        videos: null,
        videoDetails: null,
        error: null,
        searchData: null,

    },

    reducers: {
        fetchVideoStart: (state) => {
            state.loading = true;
            state.error = null;
        },

        fetchVideoSuccess: (state, action) => {
            state.loading = false;
            state.videos = action.payload;
        },

        fetchVideosFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        fetchVideoDetails: (state, action) => {
            state.videoDetails = action.payload;
        },

        fetchSearchData: (state, action) => {
            state.searchData = action.payload;
        },

    }
});

export const { fetchVideoStart, fetchVideoSuccess, fetchVideosFailure, fetchVideoDetails, fetchSearchData, } = videosSlice.actions;
export const videoReducer = videosSlice.reducer;