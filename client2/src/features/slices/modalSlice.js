import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        open: false,
        content: null,
    },
    reducers: {
        openModal(state, action) {
            state.open = true;
            state.content = action.payload;
        },
        closeModal(state) {
            state.open = false;
            state.content = null;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;