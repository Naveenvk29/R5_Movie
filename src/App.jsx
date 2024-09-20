import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Trending from "./Pages/Trading";
import Popular from "./Pages/Popular";
import Movie from "./Pages/Movie";
import TVshows from "./Pages/TVshows";
const App = () => {
  return (
    <div className="flex w-full h-screen bg-zinc-800 text-white  ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trading" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/tvshows" element={<TVshows />} />
      </Routes>
    </div>
  );
};

export default App;
