import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/MovieSlice";
import tvReducer from "./features/TvSlice";
import personReducer from "./features/PersonSlice";
const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    person: personReducer,
  },
});

export default store;
