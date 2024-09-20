import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/MovieSlice";
import tvReducer from "./features/TvSlice";
import peopleReducer from "./features/PeopleSlice";
const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    people: peopleReducer,
  },
});

export default store;
