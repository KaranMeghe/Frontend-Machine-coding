import { createSlice } from '@reduxjs/toolkit';

const videosSlice = createSlice({
    name: "videos",
    initialState: {
        loading: false,
        videos: null,
        error: null,
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
        }
    }
});

export const { fetchVideoStart, fetchVideoSuccess, fetchVideosFailure } = videosSlice.actions;
export const videoReducer = videosSlice.reducer;