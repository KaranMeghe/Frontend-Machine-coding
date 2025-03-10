import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addLiveChatMessage: (state, action) => {
            state.messages.splice(10, 1);
            state.messages.unshift(action.payload);
        },
    },
});

export const { addLiveChatMessage } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
