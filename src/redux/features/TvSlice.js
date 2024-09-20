import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  info: null,
};

const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    loadtv: (state, actions) => {
      state.info = actions.payload;
    },
    removetv: (state) => {
      state.info = null;
    },
  },
});

export const { loadtv, removetv } = tvSlice.actions;

export default tvSlice.reducer;
