import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Trending from "./Pages/Trading";
import Popular from "./Pages/Popular";
import Movie from "./Pages/Movie/Movie";
import TVshows from "./Pages/TvShow/TVshows";
import People from "./Pages/People/People";
import MovieDetail from "./Pages/Movie/MovieDetail";
import TvshowDetail from "./Pages/TvShow/TvshowDetail";
import PeopleDetail from "./Pages/People/PeopleDetail";
import Trailer from "./Components/Trailer";
import NotFound from "./Components/NotFound";
const App = () => {
  return (
    <div className="flex w-full h-screen bg-zinc-800 text-white  ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trading" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />

        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<MovieDetail />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/tv" element={<TVshows />} />
        <Route path="tv/details/:id" element={<TvshowDetail />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<PeopleDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
