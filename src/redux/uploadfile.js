import { createSlice } from "@reduxjs/toolkit";
export const fileslice = createSlice({
    name: "user",
    initialState: {

        file:[],
        pending: false,
        error: null,
        errorMessage: null,
    },
    reducers: {
        fileData: (state, action) => {
            state.file = action.payload;
            state.pending = false;
            state.error = null;
            state.errorMessage = null;
        },

    },
});

export const {
    fileData,

} =
    fileslice.actions;
export default fileslice.reducer;
