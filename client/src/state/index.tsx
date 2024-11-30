import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface initialStateTypes {
    user?: string; // Example field
    isLoggedIn: boolean;
}

const initialState = {
    user: "",
    isLoggedIn: false
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
      setUser(state, action: PayloadAction<string>) {
        state.user = action.payload;
        state.isLoggedIn = true;
      },
      logout(state) {
        state.user = "";
        state.isLoggedIn = false;
      },
    },
  });
  
  export const { setUser, logout } = globalSlice.actions;
  

export const {} = globalSlice.actions;
export default globalSlice.reducer; 