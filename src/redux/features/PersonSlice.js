import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  info: null,
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    loadPerson: (state, actions) => {
      state.info = actions.payload;
    },
    removePerson: (state) => {
      state.info = null;
    },
  },
});

export const { loadPerson, removePerson } = personSlice.actions;

export default personSlice.reducer;
