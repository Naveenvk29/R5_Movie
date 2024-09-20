import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  info: null,
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    loadPeople: (state, actions) => {
      state.info = actions.payload;
    },
    removeProple: (state) => {
      state.info = null;
    },
  },
});

export const { loadPeople, removeProple } = peopleSlice.actions;

export default peopleSlice.reducer;
