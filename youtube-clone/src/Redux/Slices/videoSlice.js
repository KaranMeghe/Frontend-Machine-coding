import { createSlice } from '@reduxjs/toolkit';

const videosSlice = createSlice({
    name: "video",
    initialState: {
        loading: false,
        videos: null,
        videoDetails: null,
        error: null,
        searchQueryInput: null,
        searchVideoDetails: null,
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

        searchInput: (state, action) => {
            state.searchQueryInput = action.payload;
        },

        searchVideoDetails: (state, action) => {
            console.log("Updating Redux State:", action.payload);
            state.searchVideoDetails = action.payload;
        },
    },
});

export const { fetchVideoStart, fetchVideoSuccess, fetchVideosFailure, fetchVideoDetails, searchInput, searchVideoDetails } = videosSlice.actions;
export const videoReducer = videosSlice.reducer;