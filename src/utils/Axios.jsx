import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGNiMTBkY2E3ZDlkOTlmNGQ4YTBjYWNkOGNlNjYxNyIsIm5iZiI6MTcyNTk5NzA5Ni40MDAyNTIsInN1YiI6IjY2ZTA5ZDU1ZDY2N2E3MDQ0YjJkZTczMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hRf63AFhot0u6B3w0HlHibL53nYoW-qLBgAX6BE6fEE",
  },
});

export default instance;
