import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modalGr',
    initialState: {
        open: false,
        content: null,
    },
    reducers: {
        closeModalGroups(state, action) {
            state.open = true;
            state.content = action.payload;
        },
        closeModalGroups(state) {
            state.open = false;
            state.content = null;
        },
    },
});

export const { openModalGroups, closeModalGroups } = modalSlice.actions;
export default modalSlice.reducer;